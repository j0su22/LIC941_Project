# 🏦 Pokémon Bank - Simulador de Cajero Automático (ATM)

Esta es una aplicación web desarrollada con **HTML5**, **CSS** y **JavaScript**, diseñada para simular un cajero automático ATM.

---

📈 Estado del Proyecto  
    ✅ Fase 1: Front-End básico y flujo completado
    ✅ Fase 2: Lógica de usuarios, transacciones y almacenamiento y exportación a PDF y validaciones finales

---

## 🧩 Características

El proyecto permite realizar transacciones básicas como:

- Depositar dinero
- Retirar dinero
- Consultar saldo
- Pagar servicios
- Visualizar historial de transacciones
- Ver una gráfica de análisis de transacciones
- Exportar historial en formato PDF
- Manejo multiusuario según PIN ingresado

---

## 📋 Funcionalidades

- **Login Seguro:** Solicita la inserción de tarjeta y PIN de 4 dígitos.
- **Multiusuario:** Cada usuario tiene nombre y número de cuenta únicos, gestionados según su PIN.
- **Transacciones separadas por usuario:** Cada cuenta mantiene su historial y saldo individual.
- **Validación de saldo:** No es posible retirar o pagar si no hay fondos suficientes.
- **Confirmaciones inteligentes:** SweetAlert2 confirma cada operación (retiro, pago, depósito).
- **Historial de transacciones:** Visualización detallada con opción de exportar a PDF.
- **Gráfica tipo doughnut:** Muestra proporción de movimientos según categoría (depósito, retiro, servicios).
- **Interfaz tipo cajero ATM:** Centrada, accesible, clara y responsiva.

---

## 🎨 Estilo Gráfico

- **Inspirado en Pokémon**: Colores temáticos como rojo, amarillo, azul y verde.
- **Fondos personalizados** para cada pantalla de operación.
- **Títulos y botones estilizados** con borde redondeado, íconos y colores dinámicos.
- **Botones con íconos (FontAwesome)** para navegación y exportación visual más amigable.
- **Diseño adaptable tipo ATM**: Inputs grandes, botones centrados, interfaz enfocada y simple.

---

## 📄 Documentación Adicional

Dentro de la carpeta [`docs/`](./docs/), encontrarás:

- 📈 **`diagram.png`**: Imagen del diagrama de flujo del proyecto.
- 📜 **`plantext.txt`**: Script en PlantUML para regenerar el diagrama fácilmente.

Esto facilita la trazabilidad del proyecto y su documentación técnica.

---

## 🚀 Tecnologías Utilizadas

- **HTML5** – Estructura de las páginas web
- **CSS3** – Estilos personalizados + Bootstrap 4
- **JavaScript** – Lógica principal de aplicación
- **Chart.js** – Visualización de gráficas en tiempo real
- **SweetAlert2** – Confirmaciones y alertas interactivas
- **jsPDF + autoTable** – Generación de historial de movimientos en PDF
- **LocalStorage** – Persistencia de datos del usuario sin backend

---

## 📁 Estructura del Proyecto

LIC941_P1/

    ├── css/
    │   └── main.css
    ├── docs/
    ├── js/
    │   ├── main.js
    │   ├── storage.js
    │   ├── options/
    │   │   ├── consultar.js
    │   │   ├── depositar.js
    │   │   ├── grafico.js
    │   │   ├── historial.js
    │   │   ├── pagar.js
    │   │   └── retirar.js
    ├── resources/
    │   ├── backgrounds/
    │   └── iconos/
    ├── views/
    │   ├── options/
    │   │   ├── consultar.html
    │   │   ├── depositar.html
    │   │   ├── grafico.html
    │   │   ├── historial.html
    │   │   ├── pagar.html
    │   │   ├── retirar.html
    │   └── menu.html
    ├── index.html
    └── README.md

---

## 🚀 Cómo usar

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa un PIN válido (`1234`, `2222`, `0000`) para acceder como Ash, Josue o Pepito.
4. Comienza a simular transacciones.

---

## 🎓 Autor

**Josué Cortez - CA242249**  
Desarrollado como parte del curso _Desarrollo de Aplicaciones Web con Software Interpretado en el Cliente_.

---
