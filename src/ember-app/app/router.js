import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-o-договор-l');
  this.route('i-i-s-o-договор-e',
  { path: 'i-i-s-o-договор-e/:id' });
  this.route('i-i-s-o-договор-e.new',
  { path: 'i-i-s-o-договор-e/new' });
  this.route('i-i-s-o-должности-l');
  this.route('i-i-s-o-должности-e',
  { path: 'i-i-s-o-должности-e/:id' });
  this.route('i-i-s-o-должности-e.new',
  { path: 'i-i-s-o-должности-e/new' });
  this.route('i-i-s-o-журнал-учета-l');
  this.route('i-i-s-o-журнал-учета-e',
  { path: 'i-i-s-o-журнал-учета-e/:id' });
  this.route('i-i-s-o-журнал-учета-e.new',
  { path: 'i-i-s-o-журнал-учета-e/new' });
  this.route('i-i-s-o-контрагент-l');
  this.route('i-i-s-o-контрагент-e',
  { path: 'i-i-s-o-контрагент-e/:id' });
  this.route('i-i-s-o-контрагент-e.new',
  { path: 'i-i-s-o-контрагент-e/new' });
  this.route('i-i-s-o-организация-l');
  this.route('i-i-s-o-организация-e',
  { path: 'i-i-s-o-организация-e/:id' });
  this.route('i-i-s-o-организация-e.new',
  { path: 'i-i-s-o-организация-e/new' });
  this.route('i-i-s-o-персонал-l');
  this.route('i-i-s-o-персонал-e',
  { path: 'i-i-s-o-персонал-e/:id' });
  this.route('i-i-s-o-персонал-e.new',
  { path: 'i-i-s-o-персонал-e/new' });
  this.route('i-i-s-o-путевой-лист-l');
  this.route('i-i-s-o-путевой-лист-e',
  { path: 'i-i-s-o-путевой-лист-e/:id' });
  this.route('i-i-s-o-путевой-лист-e.new',
  { path: 'i-i-s-o-путевой-лист-e/new' });
  this.route('i-i-s-o-рук-отд-лог-l');
  this.route('i-i-s-o-рук-отд-лог-e',
  { path: 'i-i-s-o-рук-отд-лог-e/:id' });
  this.route('i-i-s-o-рук-отд-лог-e.new',
  { path: 'i-i-s-o-рук-отд-лог-e/new' });
  this.route('i-i-s-o-т-ч-водитель-l');
  this.route('i-i-s-o-т-ч-водитель-e',
  { path: 'i-i-s-o-т-ч-водитель-e/:id' });
  this.route('i-i-s-o-т-ч-водитель-e.new',
  { path: 'i-i-s-o-т-ч-водитель-e/new' });
  this.route('i-i-s-o-т-ч-задан-вод-l');
  this.route('i-i-s-o-т-ч-задан-вод-e',
  { path: 'i-i-s-o-т-ч-задан-вод-e/:id' });
  this.route('i-i-s-o-т-ч-задан-вод-e.new',
  { path: 'i-i-s-o-т-ч-задан-вод-e/new' });
  this.route('i-i-s-o-трансп-ср-l');
  this.route('i-i-s-o-трансп-ср-e',
  { path: 'i-i-s-o-трансп-ср-e/:id' });
  this.route('i-i-s-o-трансп-ср-e.new',
  { path: 'i-i-s-o-трансп-ср-e/new' });
  this.route('i-i-s-o-тч-движ-г-с-м-l');
  this.route('i-i-s-o-тч-движ-г-с-м-e',
  { path: 'i-i-s-o-тч-движ-г-с-м-e/:id' });
  this.route('i-i-s-o-тч-движ-г-с-м-e.new',
  { path: 'i-i-s-o-тч-движ-г-с-м-e/new' });
  this.route('i-i-s-o-тч-раб-вод-авто-l');
  this.route('i-i-s-o-тч-раб-вод-авто-e',
  { path: 'i-i-s-o-тч-раб-вод-авто-e/:id' });
  this.route('i-i-s-o-тч-раб-вод-авто-e.new',
  { path: 'i-i-s-o-тч-раб-вод-авто-e/new' });
});

export default Router;
