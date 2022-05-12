import { RepositoryItem  } from "./RepositoryItem"
import { useState, useEffect } from 'react'

import '../styles/repositories.scss'

const url = "https://api.github.com/orgs/rocketseat/repos"

interface Repository {
    name: string,
    description: string,
    html_url: string
    id?: number,
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect( () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
        <h1>Repository List</h1>
        <ul>
        {repositories.map(repository => {
            return <RepositoryItem key={repository.id} repository={repository}/>
        })}
        </ul>
        </section>
    )
}