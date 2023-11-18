import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаключ: DS.attr('date'),
  датаНачала: DS.attr('date'),
  датаОконч: DS.attr('date'),
  обязанПосред: DS.attr('string'),
  контрагент: DS.belongsTo('i-i-s-o-контрагент', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-o-организация', { inverse: null, async: false }),
  рукОтдЛог: DS.belongsTo('i-i-s-o-рук-отд-лог', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗаключ: {
    descriptionKey: 'models.i-i-s-o-договор.validations.датаЗаключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-o-договор.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОконч: {
    descriptionKey: 'models.i-i-s-o-договор.validations.датаОконч.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  обязанПосред: {
    descriptionKey: 'models.i-i-s-o-договор.validations.обязанПосред.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-o-договор.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-o-договор.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-o-договор.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-o-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    датаОконч: attr('Дата оконч', { index: 1 }),
    датаНачала: attr('Дата начала', { index: 2 }),
    обязанПосред: attr('Обязан посред', { index: 3 })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-o-договор', {
    датаЗаключ: attr('Дата заключ', { index: 0 }),
    организация: belongsTo('i-i-s-o-организация', '', {
      наименование: attr('', { index: 1 })
    }, { index: -1, hidden: true }),
    рукОтдЛог: belongsTo('i-i-s-o-рук-отд-лог', '', {
      персонал: belongsTo('i-i-s-o-персонал', '', {
        фИО: attr('', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    контрагент: belongsTo('i-i-s-o-контрагент', '', {
      организация: attr('', { index: 3 }),
      ответсЛицо: attr('', { index: 4 })
    }, { index: -1, hidden: true }),
    датаОконч: attr('Дата оконч', { index: 5 }),
    датаНачала: attr('Дата начала', { index: 6 }),
    обязанПосред: attr('Обязан посред', { index: 7 })
  });
};
