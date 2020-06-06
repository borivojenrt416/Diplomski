import React, { Component } from "react";
import "./opis.scss";
import "./product.scss";
export class Opis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objekat: null
    };
  }
  render() {
    return (
      <table className="opisnaTabela">
        <tbody>
          {this.props.product.IdAll == "desktop" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Tip procesora</td>
                <td>{this.props.product.Tip_procesora}</td>
              </tr>
              <tr>
                <td>Namena</td>
                <td>{this.props.product.Namena}</td>
              </tr>
              <tr>
                <td>Memorija</td>
                <td>{this.props.product.Memorija}</td>
              </tr>
              <tr>
                <td>Grafička karta</td>
                <td>{this.props.product.Graficka}</td>
              </tr>
              <tr>
                <td>HDD/SSD</td>
                <td>{this.props.product.HDDSSD}</td>
              </tr>
              <tr>
                <td>Operativni sistem</td>
                <td>{this.props.product.Operativni}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "grafickekarte" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Gaming</td>
                <td>{this.props.product.Gaming}</td>
              </tr>
              <tr>
                <td>GPU</td>
                <td>{this.props.product.GPU}</td>
              </tr>
              <tr>
                <td>Količina memorije</td>
                <td>{this.props.product.Kolicina_memorije}</td>
              </tr>
              <tr>
                <td>Tip memorije</td>
                <td>{this.props.product.Tip_memorije}</td>
              </tr>
              <tr>
                <td>Interfejs</td>
                <td>{this.props.product.Interfejs}</td>
              </tr>
              <tr>
                <td>Magistrala memorije</td>
                <td>{this.props.product.Magistrala_memorije}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "hdd" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Kapacitet</td>
                <td>{this.props.product.Kapacitet}</td>
              </tr>
              <tr>
                <td>Format</td>
                <td>{this.props.product.Format}</td>
              </tr>
              <tr>
                <td>Konekcija</td>
                <td>{this.props.product.Konekcija}</td>
              </tr>
              <tr>
                <td>Tip</td>
                <td>{this.props.product.Tip}</td>
              </tr>
              <tr>
                <td>Buffer</td>
                <td>{this.props.product.Buffer}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "kucista" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Tip kućišta</td>
                <td>{this.props.product.Tip_kucista}</td>
              </tr>
              <tr>
                <td>Napajanje</td>
                <td>{this.props.product.Napajanje}</td>
              </tr>
              <tr>
                <td>Maksimalna dužina grafičke kartice</td>
                <td>{this.props.product.Maksimalna_duzina_graficke_kartice}</td>
              </tr>
              <tr>
                <td>Maksimalna visina CPU kulera</td>
                <td>{this.props.product.Maksimalna_visina_cpu_kulera}</td>
              </tr>
              <tr>
                <td>Mesta za PCI kartice</td>
                <td>{this.props.product.Mesta_za_PCI_kartice}</td>
              </tr>
              <tr>
                <td>Boja</td>
                <td>{this.props.product.Boja}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "maticneploce" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Gaming</td>
                <td>{this.props.product.Gaming}</td>
              </tr>
              <tr>
                <td>Podnožje</td>
                <td>{this.props.product.Podnozje}</td>
              </tr>
              <tr>
                <td>Čipset</td>
                <td>{this.props.product.Cipset}</td>
              </tr>
              <tr>
                <td>Tip procesora</td>
                <td>{this.props.product.Tip_procesora}</td>
              </tr>
              <tr>
                <td>Format ploče</td>
                <td>{this.props.product.Format_ploce}</td>
              </tr>
              <tr>
                <td>Podržana memorija</td>
                <td>{this.props.product.Podrzana_memorija}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "memorije" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Gaming</td>
                <td>{this.props.product.Gaming}</td>
              </tr>
              <tr>
                <td>Tip memorije</td>
                <td>{this.props.product.Tip_memorije}</td>
              </tr>
              <tr>
                <td>Kapacitet</td>
                <td>{this.props.product.Kapacitet}</td>
              </tr>
              <tr>
                <td>Maksimalna frekvencija</td>
                <td>{this.props.product.Maksimalna_frekvencija}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "monitori" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Dijagonala</td>
                <td>{this.props.product.Dijagonala}</td>
              </tr>
              <tr>
                <td>Tip panela</td>
                <td>{this.props.product.Tip_panela}</td>
              </tr>
              <tr>
                <td>Rezolucija</td>
                <td>{this.props.product.Rezolucija}</td>
              </tr>
              <tr>
                <td>Touch screen</td>
                <td>{this.props.product.Touch_screen}</td>
              </tr>
              <tr>
                <td>Odziv</td>
                <td>{this.props.product.Odziv}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "napajanja" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Izlazna snaga</td>
                <td>{this.props.product.Izlazna_snaga}</td>
              </tr>
              <tr>
                <td>Tip napajanja</td>
                <td>{this.props.product.Tip_napajanja}</td>
              </tr>
              <tr>
                <td>Oblik</td>
                <td>{this.props.product.Oblik}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "procesori" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Gaming</td>
                <td>{this.props.product.Gaming}</td>
              </tr>
              <tr>
                <td>Podnožje</td>
                <td>{this.props.product.Podnozje}</td>
              </tr>
              <tr>
                <td>Tip_procesora</td>
                <td>{this.props.product.Tip_procesora}</td>
              </tr>
              <tr>
                <td>Broj_jezgara</td>
                <td>{this.props.product.Broj_jezgara}</td>
              </tr>
              <tr>
                <td>Threads</td>
                <td>{this.props.product.Threads}</td>
              </tr>
              <tr>
                <td>Radna frekvencija</td>
                <td>{this.props.product.Radna_frekvencija}</td>
              </tr>
              <tr>
                <td>Turbo frekvencija</td>
                <td>{this.props.product.Turbo_frekvencija}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
          {this.props.product.IdAll == "ssd" ? (
            <>
              <tr>
                <td>Naziv</td>
                <td>{this.props.product.Naziv}</td>
              </tr>
              <tr>
                <td>Proizvođač</td>
                <td>{this.props.product.Proizvodjac}</td>
              </tr>
              <tr>
                <td>Kapacitet</td>
                <td>{this.props.product.Kapacitet}</td>
              </tr>
              <tr>
                <td>Interfejs</td>
                <td>{this.props.product.Interfejs}</td>
              </tr>
              <tr>
                <td>Brzina čitanja</td>
                <td>{this.props.product.Brzina_citanja}</td>
              </tr>
              <tr>
                <td>Brzina pisanja</td>
                <td>{this.props.product.Brzina_pisanja}</td>
              </tr>
            </>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    );
  }
}

export default Opis;
