export interface StatusOrdem {
    id?: number;
    cod_cliente: string;
    num_os: string;
    status_os: string;
    ident_veiculo: string;
    data: string;
    razao_cliente: string;
    unidade_cliente: string;
    prazo_resposta: string;
    tempo_restante: string;
}