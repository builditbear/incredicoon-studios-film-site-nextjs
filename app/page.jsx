import LikeButton from './like-button';

function Header({ title }) {
    return <h1>{title ? title : 'Default Titello'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title="Flamin' Hot Reactos"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}
