import React, { useState, useEffect } from 'react';

import { api } from '../services/api'

import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedId: number,
  clickMe: (id:number) => void
}

export function SideBar({ clickMe, selectedId}: SideBarProps) {
  // Complete aqui
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
 

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