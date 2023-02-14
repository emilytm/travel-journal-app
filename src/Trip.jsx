export default function Trip(props){
    return (
        <div className="trip-block">
            <img src={props.imageUrl} alt={`picture of ${props.title}`} />
            <p className="location">{props.location}</p>
            <p className="view-map"><a href={props.googleMapsUrl} target='_blank'>View on Google Maps</a></p>
            <h2>{props.title}</h2>
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p className="description">{props.description}</p>
        </div>
    );
}