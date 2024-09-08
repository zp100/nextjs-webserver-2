import { faBars, faClock, faMagnifyingGlass, faMusic } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import React from 'react'

export enum Tab {
    Mix,
    Queue,
    Search,
    Recent
}

export default function Options({}: {
}): React.ReactNode {
    const [ tab, set_tab ] = React.useState<Tab>(Tab.Mix)

    return <>
        <div className="flex gap-x-1">
            <Button icon={faMusic} title="Mix" />
            <Button icon={faBars} title="Queue" />
            <Button icon={faMagnifyingGlass} title="Search" />
            <Button icon={faClock} title="Recent" />
        </div>

        <div className="md:h-full md:overflow-y-auto">
            Test
        </div>
    </>
}
