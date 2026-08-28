import requests
from bs4 import BeautifulSoup

url = "https://aws.amazon.com/pt/products/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

categorias = {}

# Encontra todas as seções de categoria
for section in soup.select('section[data-testid="product-category-section"]'):
    cat_title = section.select_one('h2').get_text(strip=True)
    produtos = []
    for a in section.select('a[data-testid="product-card-link"]'):
        nome = a.get_text(strip=True)
        link = a['href']
        if not link.startswith('http'):
            link = "https://aws.amazon.com" + link
        produtos.append((nome, link))
    categorias[cat_title] = produtos

# Gera saída em Markdown
total = 0
for cat, produtos in categorias.items():
    print(f"### **{cat}** ({len(produtos)})")
    for nome, link in produtos:
        print(f"- [{nome}]({link})")
    print()
    total += len(produtos)
print(f"**Total de produtos oficiais da AWS: {total}**")