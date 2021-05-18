import './App.css';

function App() {
  return (
    <div className="grid-container">
        <header className="bg-dark flex justify-between px-20 items-center">
            <div>
                <a className="font-black text-4xl logo" href="index.html">amazonia</a>
            </div>
            <ul className="flex w-2/12 justify-around ">
                <li>
                    <a className="text-2xl opacity-80" href="cart.html">Cart</a>
                </li>
                <li>
                    <a className="text-2xl opacity-80" href="signin.html">Sign In</a>
                </li>
            </ul>
        </header>
        <main className="text-black">
            <div>
                <div className="row center">
                  <div className="card">
                    <a href="product.html">
                      <img className="medium" src="./images/p1.jpg" alt="product" />
                    </a>
                    <div className="card-body">
                      <a href="product.html">
                        <h2>Nike Slim Shirts</h2>
                      </a>
                      <div className="rating">
                        <span> <i className="fa fa-star text-yellow-400"></i> </span>
                        <span> <i className="fa fa-star text-yellow-400"></i> </span>
                        <span> <i className="fa fa-star text-yellow-400"></i> </span>
                        <span> <i className="fa fa-star text-yellow-400"></i> </span>
                        <span> <i className="fa fa-star text-yellow-400"></i> </span>
                      </div>
                      <div className="price">$120</div>
                    </div>
                  </div>
                </div>
            </div>
        </main>
        <footer className="bg-dark grid place-items-center text-xl">
            <span className="opacity-60">All right reversed &copy; 2021</span>
        </footer>
    </div>
  );
}

export default App;
