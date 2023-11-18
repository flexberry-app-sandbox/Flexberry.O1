import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.o.caption'),
          title: i18n.t('forms.application.sitemap.o.title'),
          children: [{
            link: 'i-i-s-o-т-ч-задан-вод-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-т-ч-задан-вод-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-т-ч-задан-вод-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-o-контрагент-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-контрагент-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-o-тч-движ-г-с-м-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-тч-движ-г-с-м-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-тч-движ-г-с-м-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-o-тч-раб-вод-авто-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-тч-раб-вод-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-тч-раб-вод-авто-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-o-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-рук-отд-лог-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-o-журнал-учета-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-журнал-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-журнал-учета-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-o-должности-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-должности-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-o-путевой-лист-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-путевой-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-путевой-лист-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-o-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-трансп-ср-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-o-договор-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-договор-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-o-т-ч-водитель-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-т-ч-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-т-ч-водитель-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-o-организация-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-организация-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-o-персонал-l',
            caption: i18n.t('forms.application.sitemap.o.i-i-s-o-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.o.i-i-s-o-персонал-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})