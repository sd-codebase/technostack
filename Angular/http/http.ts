Http 
// first we need to import HttpClientModule after BrowserModule
@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ]
})

// In data service we need to use HttpClient
@Injectable()
export class DataService {
  url = 'data-url',
  constructor(private http: HttpClient) { }
}

// Add get call in data service
getData(): Observable<HttpResponse<Data>> {
    return this.http.get<Data>(this.url);
}

// Add post call in data service
saveData(body: Data): Observable<Data> {
    return this.http.post<Data>(this.url, body);
}

