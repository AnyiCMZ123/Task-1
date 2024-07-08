# Comandos para crear un repo y  hacer un PUSH en un repo remoto
![](https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png)


### Configuración inicial de Git
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

### Crear un nuevo repositorio local
```bash
mkdir nombre-del-proyecto
cd nombre-del-proyecto
git init
```
### Añadir archivos al repositorio
```bash
git add .
```
### Hacer un commit
```bash
git commit -m "Mensaje descriptivo de los cambios"
```
### Conectar con un repositorio remoto
```bash
git remote add origin https://github.com/tuusuario/nombre-del-repo.git
```
### Enviar los cambios al repositorio remoto
```bash
git push -u origin master
```
### Flujo de trabajo típico
- Realizar cambios en los archivos: Edita, añade o elimina archivos en tu proyecto.

- Añadir archivos al área de preparación:
```bash
git add .
```
- Hacer un commit: 
```bash
git commit -m "Descripción de los cambios"
```
- Actualizar el repositorio remoto: Envía los commits al repositorio remoto.
```bash
git push
```

## Otros comandos útiles

### Ver el estado del repositorio:
```bash
git status
```
### Ver el historial de commits:
```bash
git log
```
### Clonar un repositorio remoto:
```bash
git clone https://github.com/tuusuario/nombre-del-repo.git
```
### Crear y cambiar a una nueva rama:
```bash
git checkout -b nombre-de-la-rama
```
### Cambiar a una rama existente
```bash
git checkout nombre-de-la-rama
```
### Combinar una rama con la rama actual:
```bash
git merge nombre-de-la-rama
```
### Eliminar una rama:
```bash
git branch -d nombre-de-la-rama
```








