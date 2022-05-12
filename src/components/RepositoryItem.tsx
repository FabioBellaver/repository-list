interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
        id?: number,
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
        <strong>{props.repository.name}</strong>
        <p>
            {props.repository.description ?? "No description on GitHub"}
        </p>
        <a 
            target="_blank"
            href={props.repository.html_url}>
            Repository acess
        </a>
    </li>
    )
}