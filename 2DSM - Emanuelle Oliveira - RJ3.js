// classes

class Cliente {
    #cpf; // atributo privado

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set(); 
        this.#cpf = cpf;
    }

    // método getter para acessar CPF(getter é get para atributo privado)
    getCpf() {
        return this.#cpf;
    }

    // método setter para alterar o CPF (setter é set para atributo privado)
    setCpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    // métodos para transformar o CPF em caixa alta e  baixa
    getCpfUpper() {
        return this.#cpf.toUpperCase();
    }

    getCpfLower() {
        return this.#cpf.toLowerCase();
    }

    // método para adicionar telefone
    adicionarTelefone(telefone) {
        this.telefones.add(telefone); 
    }

    // método para exibir detalhes do cliente
    detalhes() {
        let detalhesTelefone = [...this.telefones].map(t => `ddd: ${t.ddd} numero: ${t.numero}`).join('\n');
        return `Nome: ${this.nome}\nCPF: ${this.getCpf()}\nEndereço: ${this.endereco.estado} cidade: ${this.endereco.cidade} rua: ${this.endereco.rua} numero: ${this.endereco.numero}\n${detalhesTelefone}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Empresa {
    #cnpj; // atributo privado

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.#cnpj = cnpj;
        this.clientes = new Set(); 
        this.telefones = new Set(); 
    }

    // método getter para acessar o CNPJ
    getCnpj() {
        return this.#cnpj;
    }

    // método setter para alterar o CNPJ 
    setCnpj(novoCnpj) {
        this.#cnpj = novoCnpj;
    }

    // métodos para transformar o CNPJ em caixa alta e  baixa
    getCnpjUpper() {
        return this.#cnpj.toUpperCase();
    }

    getCnpjLower() {
        return this.#cnpj.toLowerCase();
    }

    // método para adicionar cliente
    adicionarCliente(cliente) {
        this.clientes.add(cliente); 
    }

    // método para adicionar telefone
    adicionarTelefone(telefone) {
        this.telefones.add(telefone); 
    }

    // método para exibir detalhes da empresa
    detalhes() {
        let detalhesClientes = [...this.clientes].map(cliente => cliente.detalhes()).join('\n\n');
        return `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\nCNPJ: ${this.getCnpj()}\n------------------\n${detalhesClientes}`;
    }
}

// criar endereço da empresa (exemplos)
let enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andromeda", 987);

// criando telefones
let telefone1 = new Telefone(12, 99999999);
let telefone2 = new Telefone(12, 99999999);
let telefone3 = new Telefone(12, 88888888);
let telefone4 = new Telefone(12, 88888888);
let telefone5 = new Telefone(12, 77777777);
let telefone6 = new Telefone(12, 77777777);
let telefone7 = new Telefone(12, 66666666);
let telefone8 = new Telefone(12, 66666666);

// criando a empresa
let empresa = new Empresa("ABC LDA", "Mercado Online", "1234567890001", enderecoEmpresa);

// criando clientes com seus endereços
let cliente1 = new Cliente("João", "12345678900", new Endereco("SP", "São José dos Campos", "Av Andromeda", 987));
let cliente2 = new Cliente("Gabriel", "23456789012", new Endereco("SP", "São José dos Campos", "Av Andromeda", 412));
let cliente3 = new Cliente("Barbara", "34567890123", new Endereco("SP", "São José dos Campos", "Av São João", 789));
let cliente4 = new Cliente("Márcia", "45678901234", new Endereco("SP", "São José dos Campos", "Av Andromeda", 452));

// adicionando telefones aos clientes
cliente1.adicionarTelefone(telefone1);
cliente1.adicionarTelefone(telefone2);
cliente2.adicionarTelefone(telefone3);
cliente2.adicionarTelefone(telefone4);
cliente3.adicionarTelefone(telefone5);
cliente3.adicionarTelefone(telefone6);
cliente4.adicionarTelefone(telefone7);
cliente4.adicionarTelefone(telefone8);

// adicionando clientes à empresa
empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);

// exibindo detalhes da empresa na tela
console.log(empresa.detalhes());
