import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/viva-light/theme.css"
import { useState } from "react"
import { useEffect } from "react"
import { API } from "../services"

const Home = () => {

    //CRIANDO UM USESTATE PARA GUARDAR OS PRODUTOS VINDO DA API - PARA SER UTILIZADA NA FUNÇÃO
    const [produtos, setProdutos] = useState([]);

    //FUNÇÃO VAI RECEBER OS PRODUTOS DA API
    async function buscarProdutos(){//quando for utilizar um await, sua funcção tem que ser async
        const requisicao = await API.get('/products');
        console.log(requisicao);//verifica se está retornando os valores do endpoint
        setProdutos(requisicao.data);
    }

    //CRIANDO A REQUISIÇÃO PARA A API - USEEFFECT
    useEffect(() => {
        buscarProdutos();
    }, [])//SE DEIXARMOS O ARRAY DE DEPENDENCIAS VAZIO, O QUE ESTÁ DENTRO DO CORPO DO USEEFECT SÓ ACONTECE UMA VEZ, QUE É QUANDO O COMPONENTE É RENDERIZADO

    return ( 
        <>
            <section className="overflow-hidden px-5">
                <h1 className="shadow-5 p-3 border-round-md text-center">Lista de produtos</h1>

                <ul className="grid p-0 list-none">
                    {
                        produtos.map((produtos) => (
                            <li className="col-12 md:col-3 ">
                            <div className="shadow-6 p-3 border-round-md">
                            <div className="relative">
                                    <img className="w-full" 
                                    style={{height: "300px", objectFit: 'contain'}} 
                                    src={produtos.image} alt="bolsa" /> 
                                <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">{produtos.rating.rate}</h6>
                            </div>
                                <h3 className="mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">{produtos.title}: </h3>
                                <h6 className="mt-1 text-primary uppercase">Categoria: {produtos.category}</h6>
                                <h2 className="mb-0">Preço: R$ {produtos.price}</h2>
                            </div>
                            </li>
                        ))
                    }
                </ul>    
            </section>  
        </>
     );
}
 
export default Home;