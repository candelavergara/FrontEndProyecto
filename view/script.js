document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const campos = [
        'nombre',
        'apellido',
        'edad',
        'telefono',
        'fecha_nacimiento',
        'email',
        'asunto',
        'contenido',
    ];

    let formularioValido = true;

    campos.forEach((campo) => {
        const valor = document.getElementById(campo).value.trim();
        if (!valor) {
            console.log(`El campo ${campo} está vacío.`);
            formularioValido = false;
        }
    });

    if (formularioValido) {
        console.log('Formulario enviado correctamente.');
        alert('¡Gracias por contactarnos! Hemos recibido tu mensaje.');
    } else {
        console.log('Por favor, completa todos los campos.');
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    const productos = [
        { nombre: "Sillón moderno", precio: 12000 },
        { nombre: "Mesa de comedor", precio: 25000 },
        { nombre: "Lámpara de techo", precio: 8000 },
        { nombre: "Cuadro decorativo", precio: 5000 },
        { nombre: "Alfombra de lana", precio: 7000 },
    ];

    function mostrarProductos() {
       
        productos.forEach((producto, index) => {
            console.log(`Producto ${index + 1}:`);
            console.log(`Nombre: ${producto.nombre}`);
            console.log(`Precio: $${producto.precio}`);
            console.log('--------------------');
        });

    
        const listaProductos = document.getElementById('listaProductos');
        listaProductos.innerHTML = ''; 

        productos.forEach((producto) => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaProductos.appendChild(li);
        });
    }

    document.getElementById('mostrarProductos').addEventListener('click', mostrarProductos);
});




let cart = [];

function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');
  cartItemsContainer.innerHTML = ''; 

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      ${item.name} - $${item.price} (x${item.quantity}) 
      <button class="remove-item" data-id="${item.id}">Eliminar</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });


  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `Total: $${total}`;

  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.dataset.id);
      removeFromCart(productId);
    });
  });
}


function addToCart(productId, productName, productPrice) {
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
  }

  updateCart();
}


function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId); 
  updateCart();
}

function emptyCart() {
  cart = []; 
  updateCart();
}


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productElement = button.closest('.product');
    const productId = parseInt(productElement.dataset.id);
    const productName = productElement.dataset.name;
    const productPrice = parseInt(productElement.dataset.price);

    addToCart(productId, productName, productPrice);
  });
});

document.querySelector('.empty-cart').addEventListener('click', emptyCart);

document.addEventListener('DOMContentLoaded', function () {
    const productos = [
        {
            nombre: "Sillón moderno",
            precio: 12000,
            descripcion: "Un cómodo sillón moderno ideal para tu sala de estar.",
        },
        {
            nombre: "Mesa de comedor",
            precio: 25000,
            descripcion: "Mesa de comedor para 6 personas, fabricada en madera maciza.",
        },
        {
            nombre: "Lámpara de techo",
            precio: 8000,
            descripcion: "Lámpara de techo con diseño minimalista y luz LED.",
        },
        {
            nombre: "Cuadro decorativo",
            precio: 5000,
            descripcion: "Cuadro decorativo con marco de madera y pintura abstracta.",
        },
        {
            nombre: "Alfombra de lana",
            precio: 7000,
            descripcion: "Alfombra de lana tejida a mano con un diseño único.",
        },
    ];


    const productosContainer = document.getElementById('productos-container');
 
    function generarListadoDeProductos() {
        productos.forEach((producto) => {
     
            const productoDiv = document.createElement('div');
            productoDiv.className = 'producto';

        
            const titulo = document.createElement('h2');
            titulo.textContent = producto.nombre;

        
            const precio = document.createElement('p');
            precio.textContent = `Precio: $${producto.precio}`;

            const descripcion = document.createElement('p');
            descripcion.textContent = producto.descripcion;
            descripcion.className = 'descripcion';

            productoDiv.addEventListener('click', () => {
                descripcion.style.display =
                    descripcion.style.display === 'block' ? 'none' : 'block';
            });

            productoDiv.appendChild(titulo);
            productoDiv.appendChild(precio);
            productoDiv.appendChild(descripcion);

            productosContainer.appendChild(productoDiv);
        });
    }

    generarListadoDeProductos();
});

