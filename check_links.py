import re
import requests
from urllib.parse import urlparse
import time

def extract_urls_from_html(file_path):
    """Extrai todas as URLs do arquivo HTML"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex para encontrar URLs em {nome: '...', url: '...'}
    pattern = r"url:\s*'([^']+)'"
    urls = re.findall(pattern, content)
    return list(set(urls))  # Remove duplicatas

def check_url(url):
    """Verifica se a URL está acessível"""
    try:
        response = requests.head(url, timeout=10, allow_redirects=True)
        return response.status_code, response.url
    except requests.RequestException as e:
        return None, str(e)

def main():
    print("Verificando links do index.html...\n")
    
    urls = extract_urls_from_html('index.html')
    print(f"Total de URLs unicas encontradas: {len(urls)}\n")
    
    broken_links = []
    redirected_links = []
    
    for i, url in enumerate(urls, 1):
        print(f"[{i}/{len(urls)}] Verificando: {url[:60]}...")
        status, final_url = check_url(url)
        
        if status is None:
            print(f"  ERRO: {final_url}\n")
            broken_links.append((url, final_url))
        elif status >= 400:
            print(f"  Status {status}\n")
            broken_links.append((url, f"HTTP {status}"))
        elif final_url != url:
            print(f"  Redirecionado para: {final_url}\n")
            redirected_links.append((url, final_url))
        else:
            print(f"  OK\n")
        
        time.sleep(0.5)
    
    # Relatorio final
    print("\n" + "="*80)
    print("RELATORIO FINAL")
    print("="*80)
    
    if broken_links:
        print(f"\nLinks quebrados ({len(broken_links)}):")
        for url, error in broken_links:
            print(f"  - {url}")
            print(f"    Erro: {error}\n")
    else:
        print("\nNenhum link quebrado encontrado!")
    
    if redirected_links:
        print(f"\nLinks redirecionados ({len(redirected_links)}):")
        for original, final in redirected_links:
            print(f"  - {original}")
            print(f"    -> {final}\n")
    
    print(f"\nLinks funcionando: {len(urls) - len(broken_links)}/{len(urls)}")

if __name__ == "__main__":
    main()
