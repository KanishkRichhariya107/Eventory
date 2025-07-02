const EventCard = ({ event }) => {
  console.log("Rendering EventCard for:", event); // TEMP LOG

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>Date: {event.dates?.start?.localDate}</p>
      <p>Venue: {event._embedded?.venues?.[0]?.name}</p>
      <a href={event.url} target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </div>
  );
};

export default EventCard;
