import React, {useState} from "react";

function HogTile({ name, image, specialty, weight, greased, "highest medal achieved": highestMedal  }) {

    const [showDetails, setShowDetails] = useState(false)

    const sortHogs = Array.isArray(name, image) ? (
        <div>
            <div>
              <h4>{name.map((n, index) => <li key={index}>{n}</li>)}</h4>
              <img src={image} alt={name} />
            </div>
        </div>
    ) : (
        <div>
          <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            
          </div>
        </div>
    );

    function handleDetails () {
        setShowDetails(!showDetails)
    }

    return (
        <div onClick={handleDetails}>
            {sortHogs}
            {showDetails && (
                <div>
                        <p><strong>Specialty:</strong> {specialty}</p>
                        <p><strong>Weight:</strong> {weight}</p>
                        <p><strong>Greased:</strong> {greased ? 'Yes' : 'No'}</p>
                        <p><strong>Highest Medal Achieved:</strong> {highestMedal}</p>
                </div>
                )}
        </div>
    )

}

export default HogTile