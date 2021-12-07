import { memo } from "react";
import { useCallback } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

const SideBarComponent = ({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) => {

  const handleOnClick = useCallback((genreId: number) => {
    buttonClickCallback(genreId)
  }, [buttonClickCallback]);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={handleOnClick}
            id={genre.id}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export const SideBar = memo(SideBarComponent);
