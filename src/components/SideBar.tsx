import React from 'react';

import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[],
  selectedId: number,
  clickMe: (id:number) => void
}

export function SideBar({ genres, selectedId, clickMe }:SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={genre.id}
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => clickMe(genre.id)}
              selected={selectedId === genre.id}
            />
          ))}
        </div>

      </nav>

  )
}