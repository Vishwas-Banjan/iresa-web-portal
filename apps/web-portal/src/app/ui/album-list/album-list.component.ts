import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlbumsFacade } from '@iresa/web-portal-data';
import { Router } from '@angular/router';

@Component({
  selector: 'iresa-portal-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumListComponent implements OnInit {
  constructor(private albumFacade: AlbumsFacade, private router: Router) {}

  ngOnInit() {}

  get albums$() {
    return this.albumFacade.allAlbums$;
  }

  onAlbumClick(album) {
    this.router.navigate(['/album', album.id, 'tracks']);
  }
}
