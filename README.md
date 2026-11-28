# Web comercial de Clinua

Web estática (HTML+CSS, sin JS ni cookies). Desplegar como **proyecto Vercel aparte** con *Root Directory* = `web` y sin build.

Pendiente (lo aporta el usuario):
- Dominio: sustituir `https://www.clinua.com` (canonical, OG, robots, sitemap) por el real.
- Rellenar los `[RAZÓN SOCIAL]`, `[NIF]`, `[DIRECCIÓN]` (marcados en amarillo). Email de contacto: info@clinua.com. Sin nombre personal: usar razón social o marca.
- `og.png` (1200×630) y logo/colores definitivos.

## IndexNow (Bing, Copilot, Yandex…)
`b52bf0e8fce1a897dd5a7e5bdcb747b5.txt` es la clave de IndexNow: demuestra que la web es nuestra. No la borres.
Al publicar cambios, avisa a los buscadores con:

```bash
curl -s -o /dev/null -w '%{http_code}\n' -H 'Content-Type: application/json' https://api.indexnow.org/indexnow -d '{"host":"www.clinua.com","key":"b52bf0e8fce1a897dd5a7e5bdcb747b5","keyLocation":"https://www.clinua.com/b52bf0e8fce1a897dd5a7e5bdcb747b5.txt","urlList":["https://www.clinua.com/","https://www.clinua.com/software-fisioterapeutas","https://www.clinua.com/llms.txt"]}'
```
Respuesta 200 o 202 = recibido.
