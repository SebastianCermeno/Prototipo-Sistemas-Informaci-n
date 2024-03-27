import './SearchPage.css'
import CardDeck from '../Componentes/CardDeck'

class Agrupacion {
    constructor(name, descript, iconURL, iconDescript, siteURL) {
        this.name = name
        this.description = descript
        this.icon = iconURL
        this.iconDescription = iconDescript
        this.urlReference = siteURL
    }
}

function SearchPage() {
    const modelExamples = [
        new Agrupacion("MetroMUN", "Agrupación de derechos", "", "Logo MetroMUN", "MetroMUN"),
        new Agrupacion("CHEM-E-CAR", "Agrupación de Carros Químicos", "", "Logo Chem E Car", "CHEM-E-Car"),
        new Agrupacion("Arca UNIMET", "Agrupación de Rescate Animal", "", "Logo Arca Unimet", "Arca_UNIMET")
    ]
    return(
        <>
            <div>
                amongus
            </div>
            <div className="SearchGroup">
                <div className='SearchBar'>
                    <div className='BarGroup'>
                        <label htmlFor="SearchField">
                            Introducir Nombre
                        </label>
                        <input className="SearchField" type="text" />
                    </div>
                    <button>
                        Buscar
                    </button>
                </div>

                <div className='Selectors'>
                    <div className='SelectorBody'>
                        <label htmlFor="ThemeSelector">
                            Temática:
                        </label>
                        <select className='GenericSelector' id="ThemeSelector">
                            <option value="1">
                                Ciencia
                            </option>
                            <option value="2">
                                Emprendimiento
                            </option>
                            <option value="3">
                                Internacionales
                            </option>
                        </select>
                    </div>

                    <div className='SelectorBody'>
                        <label htmlFor="MemberSelector">
                            Miembros:
                        </label>
                        <select className='GenericSelector' id="MemberSelector">
                            <option value={true}>
                                Buscando
                            </option>
                            <option value={false}>
                                Cerrado
                            </option>
                        </select>
                    </div>

                    <div className='SelectorBody'>
                        <label htmlFor="SortingSelector">
                            Ordenar por:
                        </label>
                        <select className='GenericSelector' id="SortingSelector">
                            <option value={true}>
                                A-Z
                            </option>
                            <option value={false}>
                                Z-A
                            </option>
                        </select>
                    </div>

                    <div className='SelectorBody'>
                        <label htmlFor="DonationSelector">
                            Acepta Donaciones:
                        </label>
                        <select className='GenericSelector' id="DonationSelector">
                            <option value={true}>
                                Sí
                            </option>
                            <option value={false}>
                                No
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <CardDeck groupArray={modelExamples}/>
        </>
    )
}

export default SearchPage