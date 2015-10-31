import DS from 'ember-data';

export default DS.Model.extend({
	hiveID: DS.attr('integer'),
	description: DS.attr('string'),
	notes: DS.attr('float')
});
