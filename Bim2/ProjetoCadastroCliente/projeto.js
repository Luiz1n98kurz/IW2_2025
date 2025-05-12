let clientes=[
    {
        nome: "João",
        idade: 25,
        email: "joao@gmail.com"
    },
      {
       nome: "Maria",
       idade: 30, 
       email: "maria@gmail.com"
    },
      {
       nome: "José",
       idade: 35,
       email: "josé@gmail.com"
    },
       {
         nome: "Ana",
         idade: 28,
         email: "ana@gmail.com"
       }

];
//esta função acessa os objetos (clientes) com idade maior ou igual a 18 anos e retorna
        function filtrarClientesAdultos(clientes) {
            return clientes.idade >= 18;
        }
        function mostrarClientesAdultos() {
            let clientesAdultos = clientes.filter(filtrarClientesAdultos);
            
            let lista = document.getElementById("filtrarClientesAdultos");

            lista.innerHTML = ""; // Limpa a lista existente
    

            for (let i = 0; i < clientesAdultos.length; i++) {
                let item = clientesAdultos[i];
                    item.textContent = clientesAdultos[i].nome + " (" + clientesAdultos[i].idade + " anos) - " + clientesAdultos[i].email;
                    lista.appendChild(item);
            }
        }

        function cadastrarclientes() {
            let nome = document.getElementById("nome").value;
            let idade = document.getElementById("idade").value;
            let email = document.getElementById("email").value;
        }
        if (nome && idade && email) {
            clientes.push({ nome: nome, idade: idade, email: email });

            document.getElementById("mensagemcadastro"). textContent = "Cliente cadastrado com sucesso!";
            document.getElementById("nome").value = "";
            document.getElementById("idade").value = "";    
            document.getElementById("email").value = "";
        } else {
            document.getElementById("mensagemcadastro").textContent = "Preencha todos os campos!";
        }
         