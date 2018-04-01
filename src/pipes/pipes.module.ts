import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { NozeroPipe } from './nozero/nozero';
@NgModule({
	declarations: [SearchPipe,
    NozeroPipe],
	imports: [],
	exports: [SearchPipe,
    NozeroPipe]
})
export class PipesModule {}
