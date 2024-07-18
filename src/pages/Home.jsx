import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/viva-light/theme.css"

const Home = () => {
    return ( 
        <>
            <section className="overflow-hidden px-5">
                <h1>Lista de produtos</h1>

                <ul className="grid p-0 list-none">

                    <li className="col-12 md:col-3 ">
                        <div className="shadow-5 p-3 border-round-md">
                        <div className="relative">
                            <img className="w-full" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="bolsa" /> 
                            <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">4.5</h6>
                        </div>
                            <h3 className="mb-0 ">Produto: </h3>
                            <h6 className="mt-1 text-primary uppercase">Categoria: </h6>
                            <h2 className="mb-0">Preço: R$ 00.00</h2>
                        </div>
                    </li>
                    <li className="col-12 md:col-3 ">
                        <div className="bg-red-500">produto2</div> 
                    </li>
                    <li className="col-12 md:col-3 ">
                        <div className="bg-red-500">produto3</div> 
                    </li>
                    <li className="col-12 md:col-3 ">
                        <div className="bg-red-500">produto4</div> 
                    </li>
                    <li className="col-12 md:col-3 ">
                        <div className="bg-red-500">produto5</div> 
                    </li>    

                </ul>    
            </section>  
        </>
     );
}
 
export default Home;