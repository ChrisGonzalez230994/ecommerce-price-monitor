const fs = require('fs');

console.log('Iniciando generación de datos sintéticos (Mocking)... 🚀');

// Listas de datos para armar los productos
const marcas = ['Piero', 'Cannon', 'Suavestar', 'Simmons', 'La Cardeuse', 'cannon', 'PIERO']; // Inyectamos errores a propósito
const tamanos = ['1 Plaza', '1.5 Plazas', '2 Plazas', 'Queen', 'King'];
const modelos = ['Espuma Alta Densidad', 'Resortes', 'Memory Foam', 'Ortopédico'];

const productos = [];

// Generamos 100 productos de prueba
for (let i = 1; i <= 100; i++) {
    const marca = marcas[Math.floor(Math.random() * marcas.length)];
    const tamano = tamanos[Math.floor(Math.random() * tamanos.length)];
    const modelo = modelos[Math.floor(Math.random() * modelos.length)];

    // Armamos un título realista
    let titulo = `Colchón ${marca} ${tamano} ${modelo}`;
    if (Math.random() > 0.8) titulo += ' - Oferta!'; // A veces le sumamos ruido al texto

    // Precio aleatorio entre $150.000 y $900.000
    const precio = Math.floor(Math.random() * 750000) + 150000;
    
    // Condición: 90% Nuevos, 10% Usados
    const condicion = Math.random() > 0.9 ? 'Usado' : 'Nuevo'; 
    const link = `https://articulo.mercadolibre.com.ar/MLA-${1000000 + i}`;

    productos.push({ Titulo: titulo, Precio: precio, Condicion: condicion, Marca: marca, Link: link });
}

// Convertimos a CSV
const csvHeader = 'Titulo,Precio,Condicion,Marca,Link\n';
const csvRows = productos.map(p => `"${p.Titulo}",${p.Precio},"${p.Condicion}","${p.Marca}","${p.Link}"`).join('\n');

try {
    fs.writeFileSync('datos_crudos.csv', csvHeader + csvRows, 'utf-8');
    console.log(`✅ ¡Éxito! Archivo datos_crudos.csv generado con ${productos.length} productos listos para SQL.`);
} catch (error) {
    console.error('❌ Error al guardar:', error);
}