export default function Trip(props){
    return (
        <div className="trip-block">
            <img src={props.imageUrl} alt={`picture of ${props.title}`} />
            <p className="location"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>{props.location}</p>
            <p className="view-map"><a href={props.googleMapsUrl} target='_blank'>View Map</a></p>
            <h2>{props.title}</h2>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
        </div>
    );
}