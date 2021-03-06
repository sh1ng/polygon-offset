/**
 * Externs file for google closure compiler
 */

// this makes GCC play with browserify

/**
 * @param {*=}o
 * @param {*=}u
 */
window.require = function(o, u) {};

/**
 * @type {Object}
 */
window.module = {
    exports: {}
};

// this is for our lib

/**
 * @param {Array.<Object>} v
 * @param {number=}        s
 */
function Offset(v, s) {};

/**
 * Change data set
 * @param  {Array.<Array>} vertices
 * @return {Offset}
 */
Offset.prototype.data = function(vertices) {};

/**
 * @param  {Number} arcSegments
 * @return {Offset}
 */
Offset.prototype.arcSegments = function(arcSegments) {};

/**
 * Create padding polygon
 *
 * @param  {Number} distance
 * @return {Array.<Number>}
 */
Offset.prototype.padding = function(dist) {};

/**
 * Creates margin polygon
 * @param  {Number} dist
 * @return {Array.<Object>}
 */
Offset.prototype.margin = function(dist) {};

/**
 * Decides by the sign if it's a padding or a margin
 *
 * @param  {Number} dist
 * @return {Array.<Object>}
 */
Offset.prototype.offset = function(dist) {};

// this is for clipper

/**
 * @type {Object}
 */
window.greinerHormann = {

    /**
     * @api
     * @param  {Array.<Array.<Number>} polygonA
     * @param  {Array.<Array.<Number>} polygonB
     * @return {Array.<Array.<Number>>|Null}
     */
    clip: function(polygonA, polygonB) {},

    /**
     * @api
     * @param  {Array.<Array.<Number>} polygonA
     * @param  {Array.<Array.<Number>} polygonB
     * @return {Array.<Array.<Number>>|Null}
     */
    diff: function(polygonA, polygonBpolygonA, polygonB) {},

    /**
     * @api
     * @param  {Array.<Array.<Number>} polygonA
     * @param  {Array.<Array.<Number>} polygonB
     * @return {Array.<Array.<Number>>|Null}
     */
    union: function(polygonA, polygonB) {},

    /**
     * @api
     * @param  {Array.<Array.<Number>} polygonA
     * @param  {Array.<Array.<Number>} polygonB
     * @return {Array.<Array.<Number>>|Null}
     */
    intersection: function(polygonA, polygonB) {}

};
