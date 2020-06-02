import React, { Component } from "react";
import "./searchbar.scss";
import { Link, withRouter } from "react-router-dom";

export class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            niz: [],
            nizTabela: [],
            vrednost: "",
            focused: false
        };
    }
    pretrazi = e => {
        if (e.target.value.length >= 3) {
            this.setState({
                niz: []
            });
            this.setState({
                vrednost: e.target.value
            });
            fetch(`http://localhost:4000/korisnici/pretraga`)
                .then(response => response.json())
                .then(response => {
                    console.log(this.state.vrednost, response.data);
                    this.pretraziProizvode(response.data, this.state.vrednost);
                });
        }
    };

    pretraziProizvode(niz, naziv) {
        var nizProizvoda = [];
        for (let i = 0; i < niz.length; i++) {
            var niz3 = [];
            fetch(
                `http://localhost:4000/korisnici/pretragaProizvoda/${niz[i]}/${naziv}`
            )
                .then(response2 => response2.json())
                .then(response2 => {
                    nizProizvoda = response2.data;
                    for (let i = 0; i < nizProizvoda.length; i++) {
                        if (nizProizvoda[i].IdAll !== "") niz3.push(nizProizvoda[i]);
                    }
                    this.setState({
                        niz: niz3
                    });
                });
        }
    }

    isprazni = (tip, id) => {
        this.props.history.push("/product/" + tip + "/" + id);
        this.setState({
            niz: []
        });
    };
    focusChange = () => {
        this.setState({
            focused: true
        });
    };

    focusFalse = () => {
        this.setState({
            focused: false,
            niz: []
        });
        document.getElementById("pr1").value = "";
    };
    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Unesite naziv proizvoda..."
                        id="pr1"
                        onBlur={this.focusFalse}
                        onFocus={this.focusChange}
                        onChange={this.pretrazi}
                    />
                    <div className="sp"></div>

                    <div
                        className={
                            this.state.focused !== true ? "skriveno" : "vidljivaPretraga"
                        }
                    >
                        {this.state.niz.map(n => (
                                <Link key={n.IdAll+n.ID} className="trazeno" to="#" onMouseDown={() => this.isprazni(n.IdAll, n.ID)}>
                                    <div className="unutraLink">
                                        <div id="naziv">{n.Naziv}</div>{" "}
                                        <div id="cena">{n.Cena} RSD</div>
                                    </div>
                                    <br />
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Searchbar);
