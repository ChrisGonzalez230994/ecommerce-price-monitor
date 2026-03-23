# 🛒 E-commerce Price Monitor: Data Analytics End-to-End

![Data Analytics](https://img.shields.io/badge/Data-Analytics-blue)
![SQL Server](https://img.shields.io/badge/SQL_Server-19-CC2927?logo=microsoft-sql-server)
![Power BI](https://img.shields.io/badge/Power_BI-Dashboard-F2C811?logo=powerbi)
![Node.js](https://img.shields.io/badge/Node.js-Data_Mocking-339933?logo=nodedotjs)

## 🎯 Objetivo del Proyecto
Este proyecto simula un entorno real de analítica de datos comerciales. El objetivo es analizar la oferta, dispersión de precios y estrategias de marketing (ofertas) en el mercado digital de colchones, aplicando el ciclo completo de vida del dato: desde la generación y estructuración, hasta la limpieza y visualización interactiva.

## 🛠️ Stack Tecnológico
* **Generación de Datos:** Node.js, JavaScript, Módulo `fs`.
* **Almacenamiento y Estructuración:** SQL Server Management Studio (SSMS 19).
* **Limpieza y Feature Engineering:** T-SQL (Vistas, Funciones de cadena, Lógica Condicional).
* **Business Intelligence:** Power BI.

## 🚀 Fases del Proyecto

### 1. Ingeniería de Datos (Mocking)
Ante las restricciones y bloqueos de seguridad para el web scraping tradicional en plataformas de e-commerce, se desarrolló un script en **Node.js** para la generación de datos sintéticos (*Data Mocking*). 
* Se generó un dataset de 100 publicaciones con precios, marcas y condiciones aleatorias.
* Se inyectó "ruido" de forma intencional (faltas de ortografía, inconsistencias en mayúsculas/minúsculas) para simular un escenario de negocio realista que requiera limpieza.

### 2. Almacenamiento (Base de Datos)
* Creación de la base de datos relacional local `Ecommerce_Analytics`.
* Ingesta del archivo plano (`.csv`) hacia una tabla cruda (`Colchones_Raw`).

### 3. Data Cleaning & Feature Engineering
Desarrollo de una Vista SQL (`vw_Colchones_Limpios`) para transformar y limpiar los datos en tiempo real:
* **Estandarización:** Uso de `UPPER()` para unificar las marcas registradas.
* **Feature Engineering:** Implementación de sentencias `CASE WHEN ... LIKE` para leer patrones dentro del texto de las publicaciones, logrando:
  1. Extraer y categorizar el tamaño exacto del colchón (1 Plaza, Queen, King, etc.).
  2. Detectar y etiquetar automáticamente si la publicación representa una "Oferta".

### 4. Business Intelligence y Visualización
Conexión en modo *Import* desde Power BI a la vista de SQL Server para el desarrollo de un dashboard corporativo.
* **KPIs Clave:** Recuento total de mercado y Precio Promedio.
* **Análisis de Dispersión:** Gráficos de barras comparando el precio promedio por marca.
* **Distribución de Mercado:** Gráficos de anillo mostrando el volumen de oferta por tamaño de producto.

## 📂 Estructura del Repositorio
* `/scripts`: Contiene el código en Node.js (`index.js`) utilizado para generar el dataset.
* `/sql`: Contiene el código T-SQL para la creación de la vista y la limpieza de datos (`limpieza_datos.sql`).
* `/data`: Archivo `.csv` con los datos crudos generados.
* `/dashboard`: Capturas de pantalla del tablero final en Power BI.

## 👨‍💻 Autor
**Christian González**
* Data Analyst | Business Intelligence
* 📍 Mar del Plata, Argentina
* ✉️ chris.gonzalez.alejandro@gmail.com
* 🔗 [LinkedIn](https://linkedin.com/in/chris-gonzalez-alejandro/)
