import './style.css'

const Final = () => {
return (

<main className="optimal-width">
        <div className="main-grid">

            <div className="percent33">
                <p>Commande <span id="orderId">TITI03FTP092201</span></p>
            </div>
            <div className="percent66">
                <h2>Click & Collect</h2>
                <h3>commander et déguster</h3>
            </div>
        </div>
        <div className="main-grid" id="paiement">
            <form action="/action_page.php">
                <div className="commande grid-3 dashed">
                    <div className="commande-faite">
                        <p>Merci pour votre commande</p>
                    </div>
                    <ul id="order-list">

                    </ul>
                    <div className="retirer-commande">
                        <p>Vous pouvez venir la chercher à</p>
                    </div>
                    <div className="clock">
                        <p>12h45</p>
                    </div>
                </div>
            </form>
        </div>
    </main>
);
};

export default Final;