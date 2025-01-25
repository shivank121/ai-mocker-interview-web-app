/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/oidc-token-hash";
exports.ids = ["vendor-chunks/oidc-token-hash"];
exports.modules = {

/***/ "(rsc)/./node_modules/oidc-token-hash/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/oidc-token-hash/lib/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { strict: assert } = __webpack_require__(/*! assert */ \"assert\");\nconst { createHash } = __webpack_require__(/*! crypto */ \"crypto\");\nconst { format } = __webpack_require__(/*! util */ \"util\");\n\nconst shake256 = __webpack_require__(/*! ./shake256 */ \"(rsc)/./node_modules/oidc-token-hash/lib/shake256.js\");\n\nlet encode;\nif (Buffer.isEncoding('base64url')) {\n  encode = (input) => input.toString('base64url');\n} else {\n  const fromBase64 = (base64) => base64.replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');\n  encode = (input) => fromBase64(input.toString('base64'));\n}\n\n/** SPECIFICATION\n * Its (_hash) value is the base64url encoding of the left-most half of the hash of the octets of\n * the ASCII representation of the token value, where the hash algorithm used is the hash algorithm\n * used in the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is\n * RS256, hash the token value with SHA-256, then take the left-most 128 bits and base64url encode\n * them. The _hash value is a case sensitive string.\n */\n\n/**\n * @name getHash\n * @api private\n *\n * returns the sha length based off the JOSE alg heade value, defaults to sha256\n *\n * @param token {String} token value to generate the hash from\n * @param alg {String} ID Token JOSE header alg value (i.e. RS256, HS384, ES512, PS256)\n * @param [crv] {String} For EdDSA the curve decides what hash algorithm is used. Required for EdDSA\n */\nfunction getHash(alg, crv) {\n  switch (alg) {\n    case 'HS256':\n    case 'RS256':\n    case 'PS256':\n    case 'ES256':\n    case 'ES256K':\n      return createHash('sha256');\n\n    case 'HS384':\n    case 'RS384':\n    case 'PS384':\n    case 'ES384':\n      return createHash('sha384');\n\n    case 'HS512':\n    case 'RS512':\n    case 'PS512':\n    case 'ES512':\n      return createHash('sha512');\n\n    case 'EdDSA':\n      switch (crv) {\n        case 'Ed25519':\n          return createHash('sha512');\n        case 'Ed448':\n          if (!shake256) {\n            throw new TypeError('Ed448 *_hash calculation is not supported in your Node.js runtime version');\n          }\n\n          return createHash('shake256', { outputLength: 114 });\n        default:\n          throw new TypeError('unrecognized or invalid EdDSA curve provided');\n      }\n\n    default:\n      throw new TypeError('unrecognized or invalid JWS algorithm provided');\n  }\n}\n\nfunction generate(token, alg, crv) {\n  const digest = getHash(alg, crv).update(token).digest();\n  return encode(digest.slice(0, digest.length / 2));\n}\n\nfunction validate(names, actual, source, alg, crv) {\n  if (typeof names.claim !== 'string' || !names.claim) {\n    throw new TypeError('names.claim must be a non-empty string');\n  }\n\n  if (typeof names.source !== 'string' || !names.source) {\n    throw new TypeError('names.source must be a non-empty string');\n  }\n\n  assert(typeof actual === 'string' && actual, `${names.claim} must be a non-empty string`);\n  assert(typeof source === 'string' && source, `${names.source} must be a non-empty string`);\n\n  let expected;\n  let msg;\n  try {\n    expected = generate(source, alg, crv);\n  } catch (err) {\n    msg = format('%s could not be validated (%s)', names.claim, err.message);\n  }\n\n  msg = msg || format('%s mismatch, expected %s, got: %s', names.claim, expected, actual);\n\n  assert.equal(expected, actual, msg);\n}\n\nmodule.exports = {\n  validate,\n  generate,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGlCQUFpQixFQUFFLG1CQUFPLENBQUMsc0JBQVE7QUFDM0MsUUFBUSxhQUFhLEVBQUUsbUJBQU8sQ0FBQyxzQkFBUTtBQUN2QyxRQUFRLFNBQVMsRUFBRSxtQkFBTyxDQUFDLGtCQUFNOztBQUVqQyxpQkFBaUIsbUJBQU8sQ0FBQyx3RUFBWTs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxtQkFBbUI7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsYUFBYTtBQUMvRCxrREFBa0QsY0FBYzs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvaG9tZS9zaGl2YW5rL3Byb2plY3RzL2Z1bGxTdGFjay9haS1tb2NrZXItaW50ZXJ2aWV3LXdlYi1hcHAvbm9kZV9tb2R1bGVzL29pZGMtdG9rZW4taGFzaC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBzdHJpY3Q6IGFzc2VydCB9ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgeyBmb3JtYXQgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuY29uc3Qgc2hha2UyNTYgPSByZXF1aXJlKCcuL3NoYWtlMjU2Jyk7XG5cbmxldCBlbmNvZGU7XG5pZiAoQnVmZmVyLmlzRW5jb2RpbmcoJ2Jhc2U2NHVybCcpKSB7XG4gIGVuY29kZSA9IChpbnB1dCkgPT4gaW5wdXQudG9TdHJpbmcoJ2Jhc2U2NHVybCcpO1xufSBlbHNlIHtcbiAgY29uc3QgZnJvbUJhc2U2NCA9IChiYXNlNjQpID0+IGJhc2U2NC5yZXBsYWNlKC89L2csICcnKS5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbiAgZW5jb2RlID0gKGlucHV0KSA9PiBmcm9tQmFzZTY0KGlucHV0LnRvU3RyaW5nKCdiYXNlNjQnKSk7XG59XG5cbi8qKiBTUEVDSUZJQ0FUSU9OXG4gKiBJdHMgKF9oYXNoKSB2YWx1ZSBpcyB0aGUgYmFzZTY0dXJsIGVuY29kaW5nIG9mIHRoZSBsZWZ0LW1vc3QgaGFsZiBvZiB0aGUgaGFzaCBvZiB0aGUgb2N0ZXRzIG9mXG4gKiB0aGUgQVNDSUkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuIHZhbHVlLCB3aGVyZSB0aGUgaGFzaCBhbGdvcml0aG0gdXNlZCBpcyB0aGUgaGFzaCBhbGdvcml0aG1cbiAqIHVzZWQgaW4gdGhlIGFsZyBIZWFkZXIgUGFyYW1ldGVyIG9mIHRoZSBJRCBUb2tlbidzIEpPU0UgSGVhZGVyLiBGb3IgaW5zdGFuY2UsIGlmIHRoZSBhbGcgaXNcbiAqIFJTMjU2LCBoYXNoIHRoZSB0b2tlbiB2YWx1ZSB3aXRoIFNIQS0yNTYsIHRoZW4gdGFrZSB0aGUgbGVmdC1tb3N0IDEyOCBiaXRzIGFuZCBiYXNlNjR1cmwgZW5jb2RlXG4gKiB0aGVtLiBUaGUgX2hhc2ggdmFsdWUgaXMgYSBjYXNlIHNlbnNpdGl2ZSBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRIYXNoXG4gKiBAYXBpIHByaXZhdGVcbiAqXG4gKiByZXR1cm5zIHRoZSBzaGEgbGVuZ3RoIGJhc2VkIG9mZiB0aGUgSk9TRSBhbGcgaGVhZGUgdmFsdWUsIGRlZmF1bHRzIHRvIHNoYTI1NlxuICpcbiAqIEBwYXJhbSB0b2tlbiB7U3RyaW5nfSB0b2tlbiB2YWx1ZSB0byBnZW5lcmF0ZSB0aGUgaGFzaCBmcm9tXG4gKiBAcGFyYW0gYWxnIHtTdHJpbmd9IElEIFRva2VuIEpPU0UgaGVhZGVyIGFsZyB2YWx1ZSAoaS5lLiBSUzI1NiwgSFMzODQsIEVTNTEyLCBQUzI1NilcbiAqIEBwYXJhbSBbY3J2XSB7U3RyaW5nfSBGb3IgRWREU0EgdGhlIGN1cnZlIGRlY2lkZXMgd2hhdCBoYXNoIGFsZ29yaXRobSBpcyB1c2VkLiBSZXF1aXJlZCBmb3IgRWREU0FcbiAqL1xuZnVuY3Rpb24gZ2V0SGFzaChhbGcsIGNydikge1xuICBzd2l0Y2ggKGFsZykge1xuICAgIGNhc2UgJ0hTMjU2JzpcbiAgICBjYXNlICdSUzI1Nic6XG4gICAgY2FzZSAnUFMyNTYnOlxuICAgIGNhc2UgJ0VTMjU2JzpcbiAgICBjYXNlICdFUzI1NksnOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpO1xuXG4gICAgY2FzZSAnSFMzODQnOlxuICAgIGNhc2UgJ1JTMzg0JzpcbiAgICBjYXNlICdQUzM4NCc6XG4gICAgY2FzZSAnRVMzODQnOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTM4NCcpO1xuXG4gICAgY2FzZSAnSFM1MTInOlxuICAgIGNhc2UgJ1JTNTEyJzpcbiAgICBjYXNlICdQUzUxMic6XG4gICAgY2FzZSAnRVM1MTInOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuXG4gICAgY2FzZSAnRWREU0EnOlxuICAgICAgc3dpdGNoIChjcnYpIHtcbiAgICAgICAgY2FzZSAnRWQyNTUxOSc6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuICAgICAgICBjYXNlICdFZDQ0OCc6XG4gICAgICAgICAgaWYgKCFzaGFrZTI1Nikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRWQ0NDggKl9oYXNoIGNhbGN1bGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBOb2RlLmpzIHJ1bnRpbWUgdmVyc2lvbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjcmVhdGVIYXNoKCdzaGFrZTI1NicsIHsgb3V0cHV0TGVuZ3RoOiAxMTQgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5yZWNvZ25pemVkIG9yIGludmFsaWQgRWREU0EgY3VydmUgcHJvdmlkZWQnKTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnJlY29nbml6ZWQgb3IgaW52YWxpZCBKV1MgYWxnb3JpdGhtIHByb3ZpZGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGUodG9rZW4sIGFsZywgY3J2KSB7XG4gIGNvbnN0IGRpZ2VzdCA9IGdldEhhc2goYWxnLCBjcnYpLnVwZGF0ZSh0b2tlbikuZGlnZXN0KCk7XG4gIHJldHVybiBlbmNvZGUoZGlnZXN0LnNsaWNlKDAsIGRpZ2VzdC5sZW5ndGggLyAyKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKG5hbWVzLCBhY3R1YWwsIHNvdXJjZSwgYWxnLCBjcnYpIHtcbiAgaWYgKHR5cGVvZiBuYW1lcy5jbGFpbSAhPT0gJ3N0cmluZycgfHwgIW5hbWVzLmNsYWltKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmFtZXMuY2xhaW0gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbmFtZXMuc291cmNlICE9PSAnc3RyaW5nJyB8fCAhbmFtZXMuc291cmNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmFtZXMuc291cmNlIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG4gIH1cblxuICBhc3NlcnQodHlwZW9mIGFjdHVhbCA9PT0gJ3N0cmluZycgJiYgYWN0dWFsLCBgJHtuYW1lcy5jbGFpbX0gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdgKTtcbiAgYXNzZXJ0KHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICYmIHNvdXJjZSwgYCR7bmFtZXMuc291cmNlfSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ2ApO1xuXG4gIGxldCBleHBlY3RlZDtcbiAgbGV0IG1zZztcbiAgdHJ5IHtcbiAgICBleHBlY3RlZCA9IGdlbmVyYXRlKHNvdXJjZSwgYWxnLCBjcnYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBtc2cgPSBmb3JtYXQoJyVzIGNvdWxkIG5vdCBiZSB2YWxpZGF0ZWQgKCVzKScsIG5hbWVzLmNsYWltLCBlcnIubWVzc2FnZSk7XG4gIH1cblxuICBtc2cgPSBtc2cgfHwgZm9ybWF0KCclcyBtaXNtYXRjaCwgZXhwZWN0ZWQgJXMsIGdvdDogJXMnLCBuYW1lcy5jbGFpbSwgZXhwZWN0ZWQsIGFjdHVhbCk7XG5cbiAgYXNzZXJ0LmVxdWFsKGV4cGVjdGVkLCBhY3R1YWwsIG1zZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0ZSxcbiAgZ2VuZXJhdGUsXG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/oidc-token-hash/lib/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/oidc-token-hash/lib/shake256.js":
/*!******************************************************!*\
  !*** ./node_modules/oidc-token-hash/lib/shake256.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst [major, minor] = process.version.substring(1).split('.').map((x) => parseInt(x, 10));\nconst xofOutputLength = major > 12 || (major === 12 && minor >= 8);\nconst shake256 = xofOutputLength && crypto.getHashes().includes('shake256');\n\nmodule.exports = shake256;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9zaGFrZTI1Ni5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsc0JBQVE7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsiL2hvbWUvc2hpdmFuay9wcm9qZWN0cy9mdWxsU3RhY2svYWktbW9ja2VyLWludGVydmlldy13ZWItYXBwL25vZGVfbW9kdWxlcy9vaWRjLXRva2VuLWhhc2gvbGliL3NoYWtlMjU2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBbbWFqb3IsIG1pbm9yXSA9IHByb2Nlc3MudmVyc2lvbi5zdWJzdHJpbmcoMSkuc3BsaXQoJy4nKS5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDEwKSk7XG5jb25zdCB4b2ZPdXRwdXRMZW5ndGggPSBtYWpvciA+IDEyIHx8IChtYWpvciA9PT0gMTIgJiYgbWlub3IgPj0gOCk7XG5jb25zdCBzaGFrZTI1NiA9IHhvZk91dHB1dExlbmd0aCAmJiBjcnlwdG8uZ2V0SGFzaGVzKCkuaW5jbHVkZXMoJ3NoYWtlMjU2Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2hha2UyNTY7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/oidc-token-hash/lib/shake256.js\n");

/***/ })

};
;