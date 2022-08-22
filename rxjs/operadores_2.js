import { XMLHttpRequest } from 'xmlhttprequest';
import { ajax } from 'rxjs/ajax';
import { map, concatAll } from 'rxjs/operators';

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/willianfrancas/repos'
}).pipe(
    map(res => JSON.parse(res.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name))
    .subscribe(ttt => console.log(ttt))
