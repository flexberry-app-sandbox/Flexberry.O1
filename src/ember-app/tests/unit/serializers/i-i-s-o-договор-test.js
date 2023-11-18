import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-o-договор', 'Unit | Serializer | i-i-s-o-договор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-o-договор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-o-договор',
    'model:i-i-s-o-должности',
    'model:i-i-s-o-журнал-учета',
    'model:i-i-s-o-контрагент',
    'model:i-i-s-o-организация',
    'model:i-i-s-o-персонал',
    'model:i-i-s-o-путевой-лист',
    'model:i-i-s-o-рук-отд-лог',
    'model:i-i-s-o-т-ч-водитель',
    'model:i-i-s-o-т-ч-задан-вод',
    'model:i-i-s-o-трансп-ср',
    'model:i-i-s-o-тч-движ-г-с-м',
    'model:i-i-s-o-тч-раб-вод-авто',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
