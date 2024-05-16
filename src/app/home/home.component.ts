import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  template: `
      <div class="container">
        <div class="row">        
          <div class="col-sm-12 col-xl-9">
            <h1 class="bebas-neue-regular">TFI-ONE</h1>
            <h2>UI Component Library</h2>  
            <section>
              <div class="example-label">Basic</div>
              <div class="example-button-row">
                <button mat-button>Basic</button>
                <button mat-button color="primary">Primary</button>
                <button mat-button color="accent">Accent</button>
                <button mat-button color="warn">Warn</button>
                <button mat-button disabled>Disabled</button>
                <a mat-button href="https://www.google.com/" target="_blank">Link</a>
              </div>
            </section>
            <mat-divider></mat-divider>
            <section>
              <div class="example-label">Raised</div>
              <div class="example-button-row">
                <button mat-raised-button>Basic</button>
                <button mat-raised-button color="primary">Primary</button>
                <button mat-raised-button color="accent">Accent</button>
                <button mat-raised-button color="warn">Warn</button>
                <button mat-raised-button disabled>Disabled</button>
                <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
              </div>
            </section>
            <mat-divider></mat-divider>
            <section>
              <div class="example-label">Stroked</div>
              <div class="example-button-row">
                <button mat-stroked-button>Basic</button>
                <button mat-stroked-button color="primary">Primary</button>
                <button mat-stroked-button color="accent">Accent</button>
                <button mat-stroked-button color="warn">Warn</button>
                <button mat-stroked-button disabled>Disabled</button>
                <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
              </div>
            </section>
            <mat-divider></mat-divider>
            <section>
              <div class="example-label">Flat</div>
              <div class="example-button-row">
                <button mat-flat-button>Basic</button>
                <button mat-flat-button color="primary">Primary</button>
                <button mat-flat-button color="accent">Accent</button>
                <button mat-flat-button color="warn">Warn</button>
                <button mat-flat-button disabled>Disabled</button>
                <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
              </div>
            </section>
            <mat-divider></mat-divider>
            <section>
              <div class="example-label">Icon</div>
              <div class="example-button-row">
                <div class="example-flex-container">
                  <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
                    <mat-icon>more_vert</mat-icon>
                  </button>
                  <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
                    <mat-icon>home</mat-icon>
                  </button>
                  <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
                    <mat-icon>menu</mat-icon>
                  </button>
                  <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
                    <mat-icon>favorite</mat-icon>
                  </button>
                  <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
                    <mat-icon>open_in_new</mat-icon>
                  </button>
                </div>
              </div>
            </section>
            <mat-divider></mat-divider>
            <section>
              <div class="example-label">FAB</div>
              <div class="example-button-row">
                <div class="example-flex-container">
                  <div class="example-button-container">
                    <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
                      <mat-icon>delete</mat-icon>
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
                      <mat-icon>bookmark</mat-icon>
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-fab color="warn" aria-label="Example icon button with a home icon">
                      <mat-icon>home</mat-icon>
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-fab disabled aria-label="Example icon button with a heart icon">
                      <mat-icon>favorite</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <mat-divider></mat-divider>
            <section>
              <div class="example-label">Mini FAB</div>
              <div class="example-button-row">
                <div class="example-flex-container">
                  <div class="example-button-container">
                    <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
                      <mat-icon>menu</mat-icon>
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">
                      <mat-icon>plus_one</mat-icon>
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">
                      <mat-icon>filter_list</mat-icon>
                    </button>
                  </div>
                  <div class="example-button-container">
                    <button mat-mini-fab disabled aria-label="Example icon button with a home icon">
                      <mat-icon>home</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            </div>

            <div class="col-sm-12 col-xl-3">
            <div class="divider" role="separator" aria-label="Divider"></div>
              <div class="pill-group">
                @for (item of [
                  { title: 'Explore the Docs', link: 'https://angular.dev' },
                  { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
                  { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
                  { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
                  { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
                ]; track item.title) {
                  <a
                    class="pill"
                    [href]="item.link"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>{{ item.title }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="14"
                      viewBox="0 -960 960 960"
                      width="14"
                      fill="currentColor"
                    >
                      <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                      />
                    </svg>
                  </a>
                }
              </div>
              <div class="social-links">
                <a
                  href="https://github.com/angular/angular"
                  aria-label="Github"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="Github"
                  >
                    <path
                      d="M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/angular"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="Twitter"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw"
                  aria-label="Youtube"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    width="29"
                    height="20"
                    viewBox="0 0 29 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="Youtube"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"
                    />
                  </svg>
                </a>
              </div>
          </div>
          </div>
        </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
