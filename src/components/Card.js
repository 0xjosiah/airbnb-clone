export default function Card(props) {
    const { img, rating, reviewCount, location, title, price, openSpots } = props
    let badgeText
    if (location === 'Online') badgeText = 'ONLINE'
    if (openSpots < 1) badgeText = 'SOLD OUT'
    return (
        <div className="card">
            {(badgeText) && <div className="card--badge">{badgeText}</div>}
            <img src={img} className="card--image" />
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" />
                <span> {rating} </span>
                <span className="gray"> ({reviewCount}) • </span>
                <span className="gray"> {location} </span>
            </div>
        <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}