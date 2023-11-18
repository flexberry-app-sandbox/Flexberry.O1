import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISOДоговорLForm from './forms/i-i-s-o-договор-l';
import IISOДолжностиLForm from './forms/i-i-s-o-должности-l';
import IISOЖурналУчетаLForm from './forms/i-i-s-o-журнал-учета-l';
import IISOКонтрагентLForm from './forms/i-i-s-o-контрагент-l';
import IISOОрганизацияLForm from './forms/i-i-s-o-организация-l';
import IISOПерсоналLForm from './forms/i-i-s-o-персонал-l';
import IISOПутевойЛистLForm from './forms/i-i-s-o-путевой-лист-l';
import IISOРукОтдЛогLForm from './forms/i-i-s-o-рук-отд-лог-l';
import IISOТЧВодительLForm from './forms/i-i-s-o-т-ч-водитель-l';
import IISOТЧЗаданВодLForm from './forms/i-i-s-o-т-ч-задан-вод-l';
import IISOТранспСрLForm from './forms/i-i-s-o-трансп-ср-l';
import IISOТчДвижГСМLForm from './forms/i-i-s-o-тч-движ-г-с-м-l';
import IISOТчРабВодАвтоLForm from './forms/i-i-s-o-тч-раб-вод-авто-l';
import IISOДоговорEForm from './forms/i-i-s-o-договор-e';
import IISOДолжностиEForm from './forms/i-i-s-o-должности-e';
import IISOЖурналУчетаEForm from './forms/i-i-s-o-журнал-учета-e';
import IISOКонтрагентEForm from './forms/i-i-s-o-контрагент-e';
import IISOОрганизацияEForm from './forms/i-i-s-o-организация-e';
import IISOПерсоналEForm from './forms/i-i-s-o-персонал-e';
import IISOПутевойЛистEForm from './forms/i-i-s-o-путевой-лист-e';
import IISOРукОтдЛогEForm from './forms/i-i-s-o-рук-отд-лог-e';
import IISOТЧВодительEForm from './forms/i-i-s-o-т-ч-водитель-e';
import IISOТЧЗаданВодEForm from './forms/i-i-s-o-т-ч-задан-вод-e';
import IISOТранспСрEForm from './forms/i-i-s-o-трансп-ср-e';
import IISOТчДвижГСМEForm from './forms/i-i-s-o-тч-движ-г-с-м-e';
import IISOТчРабВодАвтоEForm from './forms/i-i-s-o-тч-раб-вод-авто-e';
import IISOДоговорModel from './models/i-i-s-o-договор';
import IISOДолжностиModel from './models/i-i-s-o-должности';
import IISOЖурналУчетаModel from './models/i-i-s-o-журнал-учета';
import IISOКонтрагентModel from './models/i-i-s-o-контрагент';
import IISOОрганизацияModel from './models/i-i-s-o-организация';
import IISOПерсоналModel from './models/i-i-s-o-персонал';
import IISOПутевойЛистModel from './models/i-i-s-o-путевой-лист';
import IISOРукОтдЛогModel from './models/i-i-s-o-рук-отд-лог';
import IISOТЧВодительModel from './models/i-i-s-o-т-ч-водитель';
import IISOТЧЗаданВодModel from './models/i-i-s-o-т-ч-задан-вод';
import IISOТранспСрModel from './models/i-i-s-o-трансп-ср';
import IISOТчДвижГСМModel from './models/i-i-s-o-тч-движ-г-с-м';
import IISOТчРабВодАвтоModel from './models/i-i-s-o-тч-раб-вод-авто';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-o-договор': IISOДоговорModel,
    'i-i-s-o-должности': IISOДолжностиModel,
    'i-i-s-o-журнал-учета': IISOЖурналУчетаModel,
    'i-i-s-o-контрагент': IISOКонтрагентModel,
    'i-i-s-o-организация': IISOОрганизацияModel,
    'i-i-s-o-персонал': IISOПерсоналModel,
    'i-i-s-o-путевой-лист': IISOПутевойЛистModel,
    'i-i-s-o-рук-отд-лог': IISOРукОтдЛогModel,
    'i-i-s-o-т-ч-водитель': IISOТЧВодительModel,
    'i-i-s-o-т-ч-задан-вод': IISOТЧЗаданВодModel,
    'i-i-s-o-трансп-ср': IISOТранспСрModel,
    'i-i-s-o-тч-движ-г-с-м': IISOТчДвижГСМModel,
    'i-i-s-o-тч-раб-вод-авто': IISOТчРабВодАвтоModel
  },

  'application-name': 'O',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'O',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'O',
          title: 'O'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        o: {
          caption: 'O',
          title: 'O',
          'i-i-s-o-т-ч-задан-вод-l': {
            caption: 'Т ч задан вод',
            title: ''
          },
          'i-i-s-o-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-o-тч-движ-г-с-м-l': {
            caption: 'Тч движ ГСМ',
            title: ''
          },
          'i-i-s-o-тч-раб-вод-авто-l': {
            caption: 'Тч раб вод авто',
            title: ''
          },
          'i-i-s-o-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          },
          'i-i-s-o-журнал-учета-l': {
            caption: 'Журнал учета',
            title: ''
          },
          'i-i-s-o-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-o-путевой-лист-l': {
            caption: 'Путевой лист',
            title: ''
          },
          'i-i-s-o-трансп-ср-l': {
            caption: 'Трансп ср',
            title: ''
          },
          'i-i-s-o-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-o-т-ч-водитель-l': {
            caption: 'Т ч водитель',
            title: ''
          },
          'i-i-s-o-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-o-персонал-l': {
            caption: 'Персонал',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-o-договор-l': IISOДоговорLForm,
    'i-i-s-o-должности-l': IISOДолжностиLForm,
    'i-i-s-o-журнал-учета-l': IISOЖурналУчетаLForm,
    'i-i-s-o-контрагент-l': IISOКонтрагентLForm,
    'i-i-s-o-организация-l': IISOОрганизацияLForm,
    'i-i-s-o-персонал-l': IISOПерсоналLForm,
    'i-i-s-o-путевой-лист-l': IISOПутевойЛистLForm,
    'i-i-s-o-рук-отд-лог-l': IISOРукОтдЛогLForm,
    'i-i-s-o-т-ч-водитель-l': IISOТЧВодительLForm,
    'i-i-s-o-т-ч-задан-вод-l': IISOТЧЗаданВодLForm,
    'i-i-s-o-трансп-ср-l': IISOТранспСрLForm,
    'i-i-s-o-тч-движ-г-с-м-l': IISOТчДвижГСМLForm,
    'i-i-s-o-тч-раб-вод-авто-l': IISOТчРабВодАвтоLForm,
    'i-i-s-o-договор-e': IISOДоговорEForm,
    'i-i-s-o-должности-e': IISOДолжностиEForm,
    'i-i-s-o-журнал-учета-e': IISOЖурналУчетаEForm,
    'i-i-s-o-контрагент-e': IISOКонтрагентEForm,
    'i-i-s-o-организация-e': IISOОрганизацияEForm,
    'i-i-s-o-персонал-e': IISOПерсоналEForm,
    'i-i-s-o-путевой-лист-e': IISOПутевойЛистEForm,
    'i-i-s-o-рук-отд-лог-e': IISOРукОтдЛогEForm,
    'i-i-s-o-т-ч-водитель-e': IISOТЧВодительEForm,
    'i-i-s-o-т-ч-задан-вод-e': IISOТЧЗаданВодEForm,
    'i-i-s-o-трансп-ср-e': IISOТранспСрEForm,
    'i-i-s-o-тч-движ-г-с-м-e': IISOТчДвижГСМEForm,
    'i-i-s-o-тч-раб-вод-авто-e': IISOТчРабВодАвтоEForm
  },

});

export default translations;
