/**
 * `kate-magic-list`
 * A mutable list that provides the ability to interactively modify an array of objects 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
 
class KateMagicList extends Polymer.Element {
  static get is() { return 'kate-magic-list'; }
  static get properties() {
    return {
      /**
       * Data array, contains values into a objects
       * @type {Object}
       */
      dataList: {
        type: Array,
        value: () => ([]),
        notify: true
      },
      /**
       * Message that is shown to the user when the list is empty
       * @type {String}
       */
      emptyListMessage: {
        type: String,
        value: 'The list is empty'
      },
      /**
       * Auxiliar flag to know if dataList is empty
       * @type {Boolean}
       */
      _emptyList: {
        type: Boolean,
        computed: '_getListLength(dataList.length)'
      }
    };
  }
  /**
   * Get a boolean indicating if dataList is empty
   * @param  {Integer} size 
   * @return {Boolean}
   */
  _getListLength(size) {
    return !!size;
  }
  /**
   * Remove item from list
   * @param  {Integer} data [index of element to delete]
   */
  removeItem(data) {
    this.splice('dataList', data.detail, 1);
  }
  /**
   * Add a element to last position on the lists
   * @param {String} data [Content of new element]
   */
  addItem(data) {
    this.push('dataList', data.detail);
  }
}

window.customElements.define(KateMagicList.is, KateMagicList);