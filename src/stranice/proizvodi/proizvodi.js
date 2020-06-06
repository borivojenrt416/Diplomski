import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./proizvodi.scss";
import Card from "../kartice/card";
import { connect } from "react-redux";
import { uzmiTip,oznaci } from "../../actions/tipAkcija";
import { filteriDesktopRacunara } from "../../actions/filteriDesktopRacunaraAkcija";
import { filteriMonitora } from "../../actions/filteriMonitori";
import { filteriGrafickihKartica } from "../../actions/filteriGrafickihKartica";
import { filteriHDD } from "../../actions/filteriHDD";
import { filteriKucista } from "../../actions/filteriKucista";
import { filteriMaticnihPloca } from "../../actions/filteriMaticnihPloca";
import { filteriMemorija } from "../../actions/filteriMemorija";
import { filteriNapajanja } from "../../actions/filteriNapajanja";
import { filteriProcesora } from "../../actions/filteriProcesora";
import { filteriSSD } from "../../actions/filteriSSD";
import { FilteriDesktopRacunari } from "./filteri/filteriDesktopRacunari";
import { FilteriGornjiDekstopRacunari } from "./filteri/filteriGornjiDesktopRacunari";
import { FilteriGornjiMonitori } from "./filteri/filteriGornjiMonitori";
import { FilteriGornjiMaticnaPloca } from "./filteri/filteriGornjiMaticnaPloca";
import { FilteriMonitori } from "./filteri/filteriMonitori";
import { FilteriMaticnaPloca } from "./filteri/filteriMaticnaPloca";
import { FilteriProcesor } from "./filteri/filteriProcesor";
import { FilteriGornjiProcesor } from "./filteri/filteriGornjiProcesor";
import { FilteriGornjiMemorija } from "./filteri/filteriGornjiMemorija";
import { FilteriMemorija } from "./filteri/filteriMemorija";
import { FilteriGrafickaKartica } from "./filteri/filteriGrafickaKartica";
import { FilteriGornjiGrafickaKartica } from "./filteri/filteriGornjiGrafickaKartica";
import { FilteriHDD } from "./filteri/filteriHDD";
import { FilteriGornjiHDD } from "./filteri/filteriGornjiHDD";
import { FilteriSSD } from "./filteri/filteriSSD";
import { FilteriGornjiSSD } from "./filteri/filteriGornjiSSD";
import { FilteriGornjiNapajanja } from "./filteri/filteriGornjiNapajanja";
import { FilteriNapajanja } from "./filteri/filteriNapajanja";
import { FilteriKucista } from "./filteri/filteriKucista";
import { FilteriGornjiKucista } from "./filteri/filteriGornjiKucista";
const Proizvod = ({ match }) => <p>{match.params.id}</p>;

class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tip: this.props.match.params.tip,
      filteri: []
    };
  }
  componentWillMount() {
    this.props.uzmiTip(this.props.match.params.tip);
    this.props.oznaci(this.props.match.params.tip)
    localStorage.setItem("tip", this.props.match.params.tip);
  }

  componentWillUpdate(prevProps) {
    localStorage.setItem("tip", prevProps.match.params.tip);
    if (this.props.match.params.tip !== prevProps.match.params.tip) {
      this.props.uzmiTip(prevProps.match.params.tip);
      this.props.oznaci(prevProps.match.params.tip)
      localStorage.setItem("tip", prevProps.match.params.tip);
      let checkedBoxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      for (let i = 0; i < checkedBoxes.length; i++) {
        document.getElementById(checkedBoxes[i].id).checked = false;
      }
      this.setState({
        filteri: []
      });
      var niz = [];
      if (prevProps.match.params.tip === "desktop") {
        this.props.filteriDesktopRacunara(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "monitori") {
        this.props.filteriMonitora(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "grafickekarte") {
        this.props.filteriGrafickihKartica(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "hdd") {
        this.props.filteriHDD(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "kucista") {
        this.props.filteriKucista(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "maticneploce") {
        this.props.filteriMaticnihPloca(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "memorije") {
        this.props.filteriMemorija(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "napajanja") {
        this.props.filteriNapajanja(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "procesori") {
        this.props.filteriProcesora(niz, prevProps.match.params.tip);
      } else if (prevProps.match.params.tip === "ssd") {
        this.props.filteriSSD(niz, prevProps.match.params.tip);
      }
      document.getElementById("cenaDo").value = "dsvi";
    }

  }

  filter = e => {
    var n = this.state.filteri;
    var n2 = [];
    var postoji = 0;
    for (let i = 0; i < n.length; i++) {
      if (n[i][0] === e.target.value[0]) {
        var d = n[i];
        postoji = 1;
        n2 = n.filter(n => n != d);
        n2.push(e.target.value);
        this.setState({
          filteri: n2
        });
        if (this.props.match.params.tip === "desktop") {
          this.props.filteriDesktopRacunara(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "monitori") {
          this.props.filteriMonitora(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "grafickekarte") {
          this.props.filteriGrafickihKartica(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "hdd") {
          this.props.filteriHDD(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "kucista") {
          this.props.filteriKucista(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "maticneploce") {
          this.props.filteriMaticnihPloca(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "memorije") {
          this.props.filteriMemorija(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "napajanja") {
          this.props.filteriNapajanja(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "procesori") {
          this.props.filteriProcesora(n2, this.props.match.params.tip);
        } else if (this.props.match.params.tip === "ssd") {
          this.props.filteriSSD(n2, this.props.match.params.tip);
        }
      }
    }
    if (postoji === 0) {
      n.push(e.target.value);
      this.setState({
        filteri: n
      });
      if (this.props.match.params.tip === "desktop") {
        this.props.filteriDesktopRacunara(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "monitori") {
        this.props.filteriMonitora(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "grafickekarte") {
        this.props.filteriGrafickihKartica(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "hdd") {
        this.props.filteriHDD(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "kucista") {
        this.props.filteriKucista(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "maticneploce") {
        this.props.filteriMaticnihPloca(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "memorije") {
        this.props.filteriMemorija(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "napajanja") {
        this.props.filteriNapajanja(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "procesori") {
        this.props.filteriProcesora(n, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "ssd") {
        this.props.filteriSSD(n, this.props.match.params.tip);
      }
    }
  };

  
  checkChanged = e => {
    var niz = this.state.filteri;
    var nadjenCheck = false;
    for (let i = 0; i < niz.length; i++) {
      if (niz[i] === e.target.value) nadjenCheck = true;
    }

    if (nadjenCheck) {
      var niz2 = niz.filter(n => n != e.target.value);
      this.setState({
        filteri: niz2
      });
      if (this.props.match.params.tip === "desktop") {
        this.props.filteriDesktopRacunara(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "monitori") {
        this.props.filteriMonitora(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "grafickekarte") {
        this.props.filteriGrafickihKartica(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "hdd") {
        this.props.filteriHDD(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "kucista") {
        this.props.filteriKucista(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "maticneploce") {
        this.props.filteriMaticnihPloca(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "memorije") {
        this.props.filteriMemorija(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "napajanja") {
        this.props.filteriNapajanja(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "procesori") {
        this.props.filteriProcesora(niz2, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "ssd") {
        this.props.filteriSSD(niz2, this.props.match.params.tip);
      }
    }
    if (!nadjenCheck) {
      niz.push(e.target.value);
      this.setState({
        filteri: niz
      });
      if (this.props.match.params.tip === "desktop") {
        this.props.filteriDesktopRacunara(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "monitori") {
        this.props.filteriMonitora(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "grafickekarte") {
        this.props.filteriGrafickihKartica(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "hdd") {
        this.props.filteriHDD(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "kucista") {
        this.props.filteriKucista(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "maticneploce") {
        this.props.filteriMaticnihPloca(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "memorije") {
        this.props.filteriMemorija(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "napajanja") {
        this.props.filteriNapajanja(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "procesori") {
        this.props.filteriProcesora(niz, this.props.match.params.tip);
      } else if (this.props.match.params.tip === "ssd") {
        this.props.filteriSSD(niz, this.props.match.params.tip);
      }
    }
  };

  
  clear = e => {
    e.preventDefault();
    // var checkBoxes = this.state.filteri;
    // for(let i=0;i<checkBoxes.length;i++)
    // {
    //   document.getElementById(checkBoxes[i])
    // }
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    for (let i = 0; i < checkedBoxes.length; i++) {
      document.getElementById(checkedBoxes[i].id).checked = false;
    }
    this.setState({
      filteri: []
    });
    var niz = [];
    if (this.props.match.params.tip === "desktop") {
      this.props.filteriDesktopRacunara(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "monitori") {
      this.props.filteriMonitora(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "grafickekarte") {
      this.props.filteriGrafickihKartica(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "hdd") {
      this.props.filteriHDD(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "kucista") {
      this.props.filteriKucista(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "maticneploce") {
      this.props.filteriMaticnihPloca(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "memorije") {
      this.props.filteriMemorija(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "napajanja") {
      this.props.filteriNapajanja(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "procesori") {
      this.props.filteriProcesora(niz, this.props.match.params.tip);
    } else if (this.props.match.params.tip === "ssd") {
      this.props.filteriSSD(niz, this.props.match.params.tip);
    }
    document.getElementById("cenaDo").value = "dsvi";
  };
  render() {
    return (
      <div className="sve">
        <div>
          <div className="proiz">
            <div className="checkbox">
              {this.props.match.params.tip === "desktop" ? (
                <FilteriDesktopRacunari checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "monitori" ? (
                <FilteriMonitori checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "maticneploce" ? (
                <FilteriMaticnaPloca checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "procesori" ? (
                <FilteriProcesor checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "memorije" ? (
                <FilteriMemorija checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "grafickekarte" ? (
                <FilteriGrafickaKartica checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "hdd" ? (
                <FilteriHDD checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "ssd" ? (
                <FilteriSSD checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "napajanja" ? (
                <FilteriNapajanja checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "kucista" ? (
                <FilteriKucista checkChanged={this.checkChanged} />
              ) : (
                ""
              )}
            </div>
            <div className="proiz1">
              {this.props.match.params.tip === "desktop" ? (
                <FilteriGornjiDekstopRacunari
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "monitori" ? (
                <FilteriGornjiMonitori
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "maticneploce" ? (
                <FilteriGornjiMaticnaPloca
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "procesori" ? (
                <FilteriGornjiProcesor
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "memorije" ? (
                <FilteriGornjiMemorija
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "grafickekarte" ? (
                <FilteriGornjiGrafickaKartica
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "hdd" ? (
                <FilteriGornjiHDD clear={this.clear} filter={this.filter} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "ssd" ? (
                <FilteriGornjiSSD clear={this.clear} filter={this.filter} />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "napajanja" ? (
                <FilteriGornjiNapajanja
                  clear={this.clear}
                  filter={this.filter}
                />
              ) : (
                ""
              )}
              {this.props.match.params.tip === "kucista" ? (
                <FilteriGornjiKucista clear={this.clear} filter={this.filter} />
              ) : (
                ""
              )}
              <div className="cards">
                {this.props.tip.map(i => (
                  <div className="pored" key={i.Naziv}>
                    <Card product={i} key={i.Naziv} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tip: state.tip.tip,
  oznaka:state.oznaka
});

export default connect(mapStateToProps, {
  uzmiTip,
  oznaci,
  filteriDesktopRacunara,
  filteriMonitora,
  filteriGrafickihKartica,
  filteriMaticnihPloca,
  filteriProcesora,
  filteriMemorija,
  filteriSSD,
  filteriKucista,
  filteriHDD,
  filteriNapajanja
})(Proizvodi);
