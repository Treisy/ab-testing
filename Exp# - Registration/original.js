/* jshint esversion: 3 */
/* jshint strict: true */
/*jshint sub:true*/
//-------------------------------------------------------------------------------- THIS IS GLOBAL \\
// ensures the optimizely object is defined globally using
window['optimizely'] = window['optimizely'] || [];
/* _optimizely_evaluate=force */
(function() {
  "use strict";
  // ------------------------------------- Run first  -- GLOBAL ------------------------------\\\\
  window.exp23 = {};
  window.exp23.common = {};
  window.exp23.common.firstRun = true;
  window.exp23.common.scrollStep = 1250;
  window.exp23.common.scrollInterval = 3;
  window.exp23.common.methods = {};

  window.exp23a = {};
  window.exp23a.signUp = {};
  window.exp23a.signIn = {};
  window.exp23a.forgotPassword = {};

  window.exp23a.currentExperimentID = 8352231476;
  window.exp23.common.spinner =
    '<div class="preloaderSVG"> <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><rect  x="46" y="40" width="8"' +
    'height="20" rx="4" ry="4" ' +
    'fill="#cccccc" transform="rotate(0 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(45 50 50) translate(0 -30)">  <animate ' +
    'attributeName="opacity" from="1" to="0" dur="1s" begin="0.125s" repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(90 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.25s"' +
    'repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(135 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.375s" repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" ' +
    'height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(180 50 50) translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.5s" repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(225 50 50)' +
    'translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.625s" repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(270 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1"' +
    'to="0" dur="1s" begin="0.75s" repeatCount="indefinite"/></rect><rect  x="46" y="40" width="8" height="20" rx="4" ry="4" fill="#cccccc" transform="rotate(315 50 50) translate(0 -30)">  <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.875s"' +
    'repeatCount="indefinite"/></rect></svg></div>';
  // ------------------------------------- Run first  -- GLOBAL ------------------------------////
})();

/* _optimizely_evaluate=force */
/*
(function() {
    "use strict";
    if (!optimizely ) {
        ////console.log('Optimizely not found! experiments will NOT be loaded');
    }
    // ------------------------------------- HotJar loader script
    var sc = document.createElement("script");
    sc.setAttribute("type", "text/javascript");
    sc.textContent = "    (function(h,o,t,j,a,r){ \n" +
        "        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; \n" +
        "        h._hjSettings={hjid:416998,hjsv:5}; \n" +
        '        a=o.getElementsByTagName("head")[0]; \n' +
        '        r=o.createElement("script");r.async=1; \n' +
        "        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; \n" +
        "        a.appendChild(r); \n" +
        '    })(window,document,"//static.hotjar.com/c/hotjar-",".js?sv="); \n';
    document.getElementsByTagName("head")[0].appendChild(sc);

    var tagNames = [];
    if (optimizely && optimizely.activeExperiments) {
        window.exp23a.experimentName = window["optimizely"].data.experiments[
            window.exp23a.currentExperimentID
        ].name;
        window.exp23a.variationName = window[
            "optimizely"
        ].data.state.variationNamesMap[window.exp23a.currentExperimentID];
        tagNames.push("Experiment: " + window.exp23a.experimentName);
        tagNames.push("Variation: " + window.exp23a.variationName);
        ////console.log(
            "Exp and Variation names",
            window.exp23a.experimentName,
            window.exp23a.variationName
        );
    }

    function checkWhenHotJarIsLoaded(param) {
        if (window.hj === undefined) {
            setTimeout(
                function() {
                    checkWhenHotJarIsLoaded(100);
                },
                param
            );
        } else {
            if (tagNames.length > 0) {
                window["hj"]("ready", function() {
                    //hj("tagRecording", ["exp23_" + window.exp23a.variationName]);
                    //hj("trigger", "exp23_" + window.exp23a.variationName);
                    // ////console.log(            "HJ: Trigger heatmap ",            "exp23_" + window.exp23a.variationName          );
                });
            }
        }
    }
    checkWhenHotJarIsLoaded(100);
})();
*/

// ------------------------------------- JQUERY VALIDATOR LIBRARY
if (!$.isFunction($.validator)) {
  /* jshint ignore:start */
  (function(factory) {
    if (typeof define === "function" && define.amd) {
      define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
      module.exports = factory(require("jquery"));
    } else {
      factory($);
    }
  })(function($) {
    $.extend($.fn, {
      // http://jqueryvalidation.org/validate/
      validate: function(options) {
        // If nothing is selected, return nothing; can't chain anyway
        if (!this.length) {
          if (options && options.debug && window.console) {
            console.warn(
              "Nothing selected, can't validate, returning nothing."
            );
          }
          return;
        }

        // Check if a validator for this form was already created
        var validator = $.data(this[0], "validator");
        if (validator) {
          return validator;
        }

        // Add novalidate tag if HTML5.
        this.attr("novalidate", "novalidate");

        validator = new $.validator(options, this[0]);
        $.data(this[0], "validator", validator);

        if (validator.settings.onsubmit) {
          this.on("click.validate", ":submit", function(event) {
            if (validator.settings.submitHandler) {
              validator.submitButton = event.target;
            }

            // Allow suppressing validation by adding a cancel class to the submit button
            if ($(this).hasClass("cancel")) {
              validator.cancelSubmit = true;
            }

            // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
            if ($(this).attr("formnovalidate") !== undefined) {
              validator.cancelSubmit = true;
            }
          });

          // Validate the form on submit
          this.on("submit.validate", function(event) {
            if (validator.settings.debug) {
              // Prevent form submit to be able to see console output
              event.preventDefault();
            }

            function handle() {
              var hidden, result;
              if (validator.settings.submitHandler) {
                if (validator.submitButton) {
                  // Insert a hidden input as a replacement for the missing submit button
                  hidden = $("<input type='hidden'/>")
                    .attr("name", validator.submitButton.name)
                    .val($(validator.submitButton).val())
                    .appendTo(validator.currentForm);
                }
                result = validator.settings.submitHandler.call(
                  validator,
                  validator.currentForm,
                  event
                );
                if (validator.submitButton) {
                  // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                  hidden.remove();
                }
                if (result !== undefined) {
                  return result;
                }
                return false;
              }
              return true;
            }

            // Prevent submit for invalid forms or custom submit handlers
            if (validator.cancelSubmit) {
              validator.cancelSubmit = false;
              return handle();
            }
            if (validator.form()) {
              if (validator.pendingRequest) {
                validator.formSubmitted = true;
                return false;
              }
              return handle();
            } else {
              validator.focusInvalid();
              return false;
            }
          });
        }

        return validator;
      },

      // http://jqueryvalidation.org/valid/
      valid: function() {
        var valid, validator, errorList;

        if ($(this[0]).is("form")) {
          valid = this.validate().form();
        } else {
          errorList = [];
          valid = true;
          validator = $(this[0].form).validate();
          this.each(function() {
            valid = validator.element(this) && valid;
            if (!valid) {
              errorList = errorList.concat(validator.errorList);
            }
          });
          validator.errorList = errorList;
        }
        return valid;
      },

      // http://jqueryvalidation.org/rules/
      rules: function(command, argument) {
        // If nothing is selected, return nothing; can't chain anyway
        if (!this.length) {
          return;
        }

        var element = this[0],
          settings,
          staticRules,
          existingRules,
          data,
          param,
          filtered;

        if (command) {
          settings = $.data(element.form, "validator").settings;
          staticRules = settings.rules;
          existingRules = $.validator.staticRules(element);
          switch (command) {
            case "add":
              $.extend(existingRules, $.validator.normalizeRule(argument));

              // Remove messages from rules, but allow them to be set separately
              delete existingRules.messages;
              staticRules[element.name] = existingRules;
              if (argument.messages) {
                settings.messages[element.name] = $.extend(
                  settings.messages[element.name],
                  argument.messages
                );
              }
              break;
            case "remove":
              if (!argument) {
                delete staticRules[element.name];
                return existingRules;
              }
              filtered = {};
              $.each(argument.split(/\s/), function(index, method) {
                filtered[method] = existingRules[method];
                delete existingRules[method];
                if (method === "required") {
                  $(element).removeAttr("aria-required");
                }
              });
              return filtered;
          }
        }

        data = $.validator.normalizeRules(
          $.extend(
            {},
            $.validator.classRules(element),
            $.validator.attributeRules(element),
            $.validator.dataRules(element),
            $.validator.staticRules(element)
          ),
          element
        );

        // Make sure required is at front
        if (data.required) {
          param = data.required;
          delete data.required;
          data = $.extend({ required: param }, data);
          $(element).attr("aria-required", "true");
        }

        // Make sure remote is at back
        if (data.remote) {
          param = data.remote;
          delete data.remote;
          data = $.extend(data, { remote: param });
        }

        return data;
      }
    });

    // Custom selectors
    $.extend($.expr[":"], {
      // http://jqueryvalidation.org/blank-selector/
      blank: function(a) {
        return !$.trim("" + $(a).val());
      },

      // http://jqueryvalidation.org/filled-selector/
      filled: function(a) {
        var val = $(a).val();
        return val !== null && !!$.trim("" + val);
      },

      // http://jqueryvalidation.org/unchecked-selector/
      unchecked: function(a) {
        return !$(a).prop("checked");
      }
    });

    // Constructor for validator
    $.validator = function(options, form) {
      this.settings = $.extend(true, {}, $.validator.defaults, options);
      this.currentForm = form;
      this.init();
    };

    // http://jqueryvalidation.org/jQuery.validator.format/
    $.validator.format = function(source, params) {
      if (arguments.length === 1) {
        return function() {
          var args = $.makeArray(arguments);
          args.unshift(source);
          return $.validator.format.apply(this, args);
        };
      }
      if (params === undefined) {
        return source;
      }
      if (arguments.length > 2 && params.constructor !== Array) {
        params = $.makeArray(arguments).slice(1);
      }
      if (params.constructor !== Array) {
        params = [params];
      }
      $.each(params, function(i, n) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
          return n;
        });
      });
      return source;
    };

    $.extend($.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: false,
        focusInvalid: true,
        errorContainer: $([]),
        errorLabelContainer: $([]),
        onsubmit: true,
        ignore: ":hidden",
        ignoreTitle: false,
        onfocusin: function(element) {
          this.lastActive = element;

          // Hide error label and remove error class on focus if enabled
          if (this.settings.focusCleanup) {
            if (this.settings.unhighlight) {
              this.settings.unhighlight.call(
                this,
                element,
                this.settings.errorClass,
                this.settings.validClass
              );
            }
            this.hideThese(this.errorsFor(element));
          }
        },
        onfocusout: function(element) {
          if (
            !this.checkable(element) &&
            (element.name in this.submitted || !this.optional(element))
          ) {
            this.element(element);
          }
        },
        onkeyup: function(element, event) {
          // Avoid revalidate the field when pressing one of the following keys
          // Shift       => 16
          // Ctrl        => 17
          // Alt         => 18
          // Caps lock   => 20
          // End         => 35
          // Home        => 36
          // Left arrow  => 37
          // Up arrow    => 38
          // Right arrow => 39
          // Down arrow  => 40
          // Insert      => 45
          // Num lock    => 144
          // AltGr key   => 225
          var excludedKeys = [
            16,
            17,
            18,
            20,
            35,
            36,
            37,
            38,
            39,
            40,
            45,
            144,
            225
          ];

          if (
            (event.which === 9 && this.elementValue(element) === "") ||
            $.inArray(event.keyCode, excludedKeys) !== -1
          ) {
            return;
          } else if (
            element.name in this.submitted ||
            element.name in this.invalid
          ) {
            this.element(element);
          }
        },
        onclick: function(element) {
          // Click on selects, radiobuttons and checkboxes
          if (element.name in this.submitted) {
            this.element(element);

            // Or option elements, check parent select in that case
          } else if (element.parentNode.name in this.submitted) {
            this.element(element.parentNode);
          }
        },
        highlight: function(element, errorClass, validClass) {
          if (element.type === "radio") {
            this.findByName(element.name)
              .addClass(errorClass)
              .removeClass(validClass);
          } else {
            $(element).addClass(errorClass).removeClass(validClass);
          }
        },
        unhighlight: function(element, errorClass, validClass) {
          if (element.type === "radio") {
            this.findByName(element.name)
              .removeClass(errorClass)
              .addClass(validClass);
          } else {
            $(element).removeClass(errorClass).addClass(validClass);
          }
        }
      },

      // http://jqueryvalidation.org/jQuery.validator.setDefaults/
      setDefaults: function(settings) {
        $.extend($.validator.defaults, settings);
      },

      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: $.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: $.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: $.validator.format("Please enter a multiple of {0}.")
      },

      autoCreateRanges: false,

      prototype: {
        init: function() {
          this.labelContainer = $(this.settings.errorLabelContainer);
          this.errorContext =
            (this.labelContainer.length && this.labelContainer) ||
            $(this.currentForm);
          this.containers = $(this.settings.errorContainer).add(
            this.settings.errorLabelContainer
          );
          this.submitted = {};
          this.valueCache = {};
          this.pendingRequest = 0;
          this.pending = {};
          this.invalid = {};
          this.reset();

          var groups = (this.groups = {}),
            rules;
          $.each(this.settings.groups, function(key, value) {
            if (typeof value === "string") {
              value = value.split(/\s/);
            }
            $.each(value, function(index, name) {
              groups[name] = key;
            });
          });
          rules = this.settings.rules;
          $.each(rules, function(key, value) {
            rules[key] = $.validator.normalizeRule(value);
          });

          function delegate(event) {
            var validator = $.data(this.form, "validator"),
              eventType = "on" + event.type.replace(/^validate/, ""),
              settings = validator.settings;
            if (settings[eventType] && !$(this).is(settings.ignore)) {
              settings[eventType].call(validator, this, event);
            }
          }

          $(this.currentForm)
            .on(
              "focusin.validate focusout.validate keyup.validate",
              ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
                "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
                "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
                "[type='radio'], [type='checkbox'], [contenteditable]",
              delegate
            )
            // Support: Chrome, oldIE
            // "select" is provided as event.target when clicking a option
            .on(
              "click.validate",
              "select, option, [type='radio'], [type='checkbox']",
              delegate
            );

          if (this.settings.invalidHandler) {
            $(this.currentForm).on(
              "invalid-form.validate",
              this.settings.invalidHandler
            );
          }

          // Add aria-required to any Static/Data/Class required fields before first validation
          // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
          $(this.currentForm)
            .find("[required], [data-rule-required], .required")
            .attr("aria-required", "true");
        },

        // http://jqueryvalidation.org/Validator.form/
        form: function() {
          this.checkForm();
          $.extend(this.submitted, this.errorMap);
          this.invalid = $.extend({}, this.errorMap);
          if (!this.valid()) {
            $(this.currentForm).triggerHandler("invalid-form", [this]);
          }
          this.showErrors();
          return this.valid();
        },

        checkForm: function() {
          this.prepareForm();
          for (
            var i = 0, elements = (this.currentElements = this.elements());
            elements[i];
            i++
          ) {
            this.check(elements[i]);
          }
          return this.valid();
        },

        // http://jqueryvalidation.org/Validator.element/
        element: function(element) {
          var cleanElement = this.clean(element),
            checkElement = this.validationTargetFor(cleanElement),
            v = this,
            result = true,
            rs,
            group;

          if (checkElement === undefined) {
            delete this.invalid[cleanElement.name];
          } else {
            this.prepareElement(checkElement);
            this.currentElements = $(checkElement);

            // If this element is grouped, then validate all group elements already
            // containing a value
            group = this.groups[checkElement.name];
            if (group) {
              $.each(this.groups, function(name, testgroup) {
                if (testgroup === group && name !== checkElement.name) {
                  cleanElement = v.validationTargetFor(
                    v.clean(v.findByName(name))
                  );
                  if (cleanElement && cleanElement.name in v.invalid) {
                    v.currentElements.push(cleanElement);
                    result = result && v.check(cleanElement);
                  }
                }
              });
            }

            rs = this.check(checkElement) !== false;
            result = result && rs;
            if (rs) {
              this.invalid[checkElement.name] = false;
            } else {
              this.invalid[checkElement.name] = true;
            }

            if (!this.numberOfInvalids()) {
              // Hide error containers on last error
              this.toHide = this.toHide.add(this.containers);
            }
            this.showErrors();

            // Add aria-invalid status for screen readers
            $(element).attr("aria-invalid", !rs);
          }

          return result;
        },

        // http://jqueryvalidation.org/Validator.showErrors/
        showErrors: function(errors) {
          if (errors) {
            var validator = this;

            // Add items to error list and map
            $.extend(this.errorMap, errors);
            this.errorList = $.map(this.errorMap, function(message, name) {
              return {
                message: message,
                element: validator.findByName(name)[0]
              };
            });

            // Remove items from success list
            this.successList = $.grep(this.successList, function(element) {
              return !(element.name in errors);
            });
          }
          if (this.settings.showErrors) {
            this.settings.showErrors.call(this, this.errorMap, this.errorList);
          } else {
            this.defaultShowErrors();
          }
        },

        // http://jqueryvalidation.org/Validator.resetForm/
        resetForm: function() {
          if ($.fn.resetForm) {
            $(this.currentForm).resetForm();
          }
          this.invalid = {};
          this.submitted = {};
          this.prepareForm();
          this.hideErrors();
          var elements = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");

          this.resetElements(elements);
        },

        resetElements: function(elements) {
          var i;

          if (this.settings.unhighlight) {
            for (i = 0; elements[i]; i++) {
              this.settings.unhighlight.call(
                this,
                elements[i],
                this.settings.errorClass,
                ""
              );
              this.findByName(elements[i].name).removeClass(
                this.settings.validClass
              );
            }
          } else {
            elements
              .removeClass(this.settings.errorClass)
              .removeClass(this.settings.validClass);
          }
        },

        numberOfInvalids: function() {
          return this.objectLength(this.invalid);
        },

        objectLength: function(obj) {
          /* jshint unused: false */
          var count = 0,
            i;
          for (i in obj) {
            if (obj[i]) {
              count++;
            }
          }
          return count;
        },

        hideErrors: function() {
          this.hideThese(this.toHide);
        },

        hideThese: function(errors) {
          errors.not(this.containers).text("");
          this.addWrapper(errors).hide();
        },

        valid: function() {
          return this.size() === 0;
        },

        size: function() {
          return this.errorList.length;
        },

        focusInvalid: function() {
          if (this.settings.focusInvalid) {
            try {
              $(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                .trigger("focusin");
            } catch (e) {
              // Ignore IE throwing errors when focusing hidden elements
            }
          }
        },

        findLastActive: function() {
          var lastActive = this.lastActive;
          return (
            lastActive &&
            $.grep(this.errorList, function(n) {
              return n.element.name === lastActive.name;
            }).length === 1 &&
            lastActive
          );
        },

        elements: function() {
          var validator = this,
            rulesCache = {};

          // Select all valid inputs inside the form (no submit or reset buttons)
          return $(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function() {
              var name = this.name || $(this).attr("name"); // For contenteditable
              if (!name && validator.settings.debug && window.console) {
                console.error("%o has no name assigned", this);
              }

              // Set form expando on contenteditable
              if (this.hasAttribute("contenteditable")) {
                this.form = $(this).closest("form")[0];
              }

              // Select only the first element for each name, and only those with rules specified
              if (
                name in rulesCache ||
                !validator.objectLength($(this).rules())
              ) {
                return false;
              }

              rulesCache[name] = true;
              return true;
            });
        },

        clean: function(selector) {
          return $(selector)[0];
        },

        errors: function() {
          var errorClass = this.settings.errorClass.split(" ").join(".");
          return $(
            this.settings.errorElement + "." + errorClass,
            this.errorContext
          );
        },

        resetInternals: function() {
          this.successList = [];
          this.errorList = [];
          this.errorMap = {};
          this.toShow = $([]);
          this.toHide = $([]);
        },

        reset: function() {
          this.resetInternals();
          this.currentElements = $([]);
        },

        prepareForm: function() {
          this.reset();
          this.toHide = this.errors().add(this.containers);
        },

        prepareElement: function(element) {
          this.reset();
          this.toHide = this.errorsFor(element);
        },

        elementValue: function(element) {
          var $element = $(element),
            type = element.type,
            val,
            idx;

          if (type === "radio" || type === "checkbox") {
            return this.findByName(element.name).filter(":checked").val();
          } else if (
            type === "number" &&
            typeof element.validity !== "undefined"
          ) {
            return element.validity.badInput ? "NaN" : $element.val();
          }

          if (element.hasAttribute("contenteditable")) {
            val = $element.text();
          } else {
            val = $element.val();
          }

          if (type === "file") {
            // Modern browser (chrome & safari)
            if (val.substr(0, 12) === "C:\\fakepath\\") {
              return val.substr(12);
            }

            // Legacy browsers
            // Unix-based path
            idx = val.lastIndexOf("/");
            if (idx >= 0) {
              return val.substr(idx + 1);
            }

            // Windows-based path
            idx = val.lastIndexOf("\\");
            if (idx >= 0) {
              return val.substr(idx + 1);
            }

            // Just the file name
            return val;
          }

          if (typeof val === "string") {
            return val.replace(/\r/g, "");
          }
          return val;
        },

        check: function(element) {
          element = this.validationTargetFor(this.clean(element));

          var rules = $(element).rules(),
            rulesCount = $.map(rules, function(n, i) {
              return i;
            }).length,
            dependencyMismatch = false,
            val = this.elementValue(element),
            result,
            method,
            rule;

          // If a normalizer is defined for this element, then
          // call it to retreive the changed value instead
          // of using the real one.
          // Note that `this` in the normalizer is `element`.
          if (typeof rules.normalizer === "function") {
            val = rules.normalizer.call(element, val);

            if (typeof val !== "string") {
              throw new TypeError(
                "The normalizer should return a string value."
              );
            }

            // Delete the normalizer from rules to avoid treating
            // it as a pre-defined method.
            delete rules.normalizer;
          }

          for (method in rules) {
            rule = { method: method, parameters: rules[method] };
            try {
              result = $.validator.methods[method].call(
                this,
                val,
                element,
                rule.parameters
              );

              // If a method indicates that the field is optional and therefore valid,
              // don't mark it as valid when there are no other rules
              if (result === "dependency-mismatch" && rulesCount === 1) {
                dependencyMismatch = true;
                continue;
              }
              dependencyMismatch = false;

              if (result === "pending") {
                this.toHide = this.toHide.not(this.errorsFor(element));
                return;
              }

              if (!result) {
                this.formatAndAdd(element, rule);
                return false;
              }
            } catch (e) {
              if (this.settings.debug && window.console) {
                console.log(
                  "Exception occurred when checking element " +
                    element.id +
                    ", check the '" +
                    rule.method +
                    "' method.",
                  e
                );
              }
              if (e instanceof TypeError) {
                e.message +=
                  ".  Exception occurred when checking element " +
                  element.id +
                  ", check the '" +
                  rule.method +
                  "' method.";
              }

              throw e;
            }
          }
          if (dependencyMismatch) {
            return;
          }
          if (this.objectLength(rules)) {
            this.successList.push(element);
          }
          return true;
        },

        // Return the custom message for the given element and validation method
        // specified in the element's HTML5 data attribute
        // return the generic message if present and no method specific message is present
        customDataMessage: function(element, method) {
          return (
            $(element).data(
              "msg" +
                method.charAt(0).toUpperCase() +
                method.substring(1).toLowerCase()
            ) || $(element).data("msg")
          );
        },

        // Return the custom message for the given element name and validation method
        customMessage: function(name, method) {
          var m = this.settings.messages[name];
          return m && (m.constructor === String ? m : m[method]);
        },

        // Return the first defined argument, allowing empty strings
        findDefined: function() {
          for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] !== undefined) {
              return arguments[i];
            }
          }
          return undefined;
        },

        defaultMessage: function(element, rule) {
          var message = this.findDefined(
              this.customMessage(element.name, rule.method),
              this.customDataMessage(element, rule.method),
              // 'title' is never undefined, so handle empty string as undefined
              (!this.settings.ignoreTitle && element.title) || undefined,
              $.validator.messages[rule.method],
              "<strong>Warning: No message defined for " +
                element.name +
                "</strong>"
            ),
            theregex = /\$?\{(\d+)\}/g;
          if (typeof message === "function") {
            message = message.call(this, rule.parameters, element);
          } else if (theregex.test(message)) {
            message = $.validator.format(
              message.replace(theregex, "{$1}"),
              rule.parameters
            );
          }

          return message;
        },

        formatAndAdd: function(element, rule) {
          var message = this.defaultMessage(element, rule);

          this.errorList.push({
            message: message,
            element: element,
            method: rule.method
          });

          this.errorMap[element.name] = message;
          this.submitted[element.name] = message;
        },

        addWrapper: function(toToggle) {
          if (this.settings.wrapper) {
            toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
          }
          return toToggle;
        },

        defaultShowErrors: function() {
          var i, elements, error;
          for (i = 0; this.errorList[i]; i++) {
            error = this.errorList[i];
            if (this.settings.highlight) {
              this.settings.highlight.call(
                this,
                error.element,
                this.settings.errorClass,
                this.settings.validClass
              );
            }
            this.showLabel(error.element, error.message);
          }
          if (this.errorList.length) {
            this.toShow = this.toShow.add(this.containers);
          }
          if (this.settings.success) {
            for (i = 0; this.successList[i]; i++) {
              this.showLabel(this.successList[i]);
            }
          }
          if (this.settings.unhighlight) {
            for (i = 0, elements = this.validElements(); elements[i]; i++) {
              this.settings.unhighlight.call(
                this,
                elements[i],
                this.settings.errorClass,
                this.settings.validClass
              );
            }
          }
          this.toHide = this.toHide.not(this.toShow);
          this.hideErrors();
          this.addWrapper(this.toShow).show();
        },

        validElements: function() {
          return this.currentElements.not(this.invalidElements());
        },

        invalidElements: function() {
          return $(this.errorList).map(function() {
            return this.element;
          });
        },

        showLabel: function(element, message) {
          var place,
            group,
            errorID,
            v,
            error = this.errorsFor(element),
            elementID = this.idOrName(element),
            describedBy = $(element).attr("aria-describedby");

          if (error.length) {
            // Refresh error/success class
            error
              .removeClass(this.settings.validClass)
              .addClass(this.settings.errorClass);

            // Replace message on existing label
            error.html(message);
          } else {
            // Create error element
            error = $("<" + this.settings.errorElement + ">")
              .attr("id", elementID + "-error")
              .addClass(this.settings.errorClass)
              .html(message || "");

            // Maintain reference to the element to be placed into the DOM
            place = error;
            if (this.settings.wrapper) {
              // Make sure the element is visible, even in IE
              // actually showing the wrapped element is handled elsewhere
              place = error
                .hide()
                .show()
                .wrap("<" + this.settings.wrapper + "/>")
                .parent();
            }
            if (this.labelContainer.length) {
              this.labelContainer.append(place);
            } else if (this.settings.errorPlacement) {
              this.settings.errorPlacement(place, $(element));
            } else {
              $("#" + $(place).attr("id")).remove();
              place.insertAfter(element);
            }

            // Link error back to the element
            if (error.is("label")) {
              // If the error is a label, then associate using 'for'
              error.attr("for", elementID);

              // If the element is not a child of an associated label, then it's necessary
              // to explicitly apply aria-describedby
            } else if (
              error.parents(
                "label[for='" + this.escapeCssMeta(elementID) + "']"
              ).length === 0
            ) {
              errorID = error.attr("id");

              // Respect existing non-error aria-describedby
              if (!describedBy) {
                describedBy = errorID;
              } else if (
                !describedBy.match(
                  new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b")
                )
              ) {
                // Add to end of list if not already present
                describedBy += " " + errorID;
              }
              $(element).attr("aria-describedby", describedBy);

              // If this element is grouped, then assign to all elements in the same group
              group = this.groups[element.name];
              if (group) {
                v = this;
                $.each(v.groups, function(name, testgroup) {
                  if (testgroup === group) {
                    $(
                      "[name='" + v.escapeCssMeta(name) + "']",
                      v.currentForm
                    ).attr("aria-describedby", error.attr("id"));
                  }
                });
              }
            }
          }
          if (!message && this.settings.success) {
            error.text("");
            if (typeof this.settings.success === "string") {
              error.addClass(this.settings.success);
            } else {
              this.settings.success(error, element);
            }
          }
          this.toShow = this.toShow.add(error);
        },

        errorsFor: function(element) {
          var name = this.escapeCssMeta(this.idOrName(element)),
            describer = $(element).attr("aria-describedby"),
            selector = "label[for='" + name + "'], label[for='" + name + "'] *";

          // 'aria-describedby' should directly reference the error element
          if (describer) {
            selector =
              selector +
              ", #" +
              this.escapeCssMeta(describer).replace(/\s+/g, ", #");
          }

          return this.errors().filter(selector);
        },

        // See https://api.jquery.com/category/selectors/, for CSS
        // meta-characters that should be escaped in order to be used with JQuery
        // as a literal part of a name/id or any selector.
        escapeCssMeta: function(string) {
          return string.replace(
            /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
            "\\$1"
          );
        },

        idOrName: function(element) {
          return (
            this.groups[element.name] ||
            (this.checkable(element)
              ? element.name
              : element.id || element.name)
          );
        },

        validationTargetFor: function(element) {
          // If radio/checkbox, validate first element in group instead
          if (this.checkable(element)) {
            element = this.findByName(element.name);
          }

          // Always apply ignore filter
          return $(element).not(this.settings.ignore)[0];
        },

        checkable: function(element) {
          return /radio|checkbox/i.test(element.type);
        },

        findByName: function(name) {
          return $(this.currentForm).find(
            "[name='" + this.escapeCssMeta(name) + "']"
          );
        },

        getLength: function(value, element) {
          switch (element.nodeName.toLowerCase()) {
            case "select":
              return $("option:selected", element).length;
            case "input":
              if (this.checkable(element)) {
                return this.findByName(element.name).filter(":checked").length;
              }
          }
          return value.length;
        },

        depend: function(param, element) {
          return this.dependTypes[typeof param]
            ? this.dependTypes[typeof param](param, element)
            : true;
        },

        dependTypes: {
          boolean: function(param) {
            return param;
          },
          string: function(param, element) {
            return !!$(param, element.form).length;
          },
          function: function(param, element) {
            return param(element);
          }
        },

        optional: function(element) {
          var val = this.elementValue(element);
          return (
            !$.validator.methods.required.call(this, val, element) &&
            "dependency-mismatch"
          );
        },

        startRequest: function(element) {
          if (!this.pending[element.name]) {
            this.pendingRequest++;
            $(element).addClass(this.settings.pendingClass);
            this.pending[element.name] = true;
          }
        },

        stopRequest: function(element, valid) {
          this.pendingRequest--;

          // Sometimes synchronization fails, make sure pendingRequest is never < 0
          if (this.pendingRequest < 0) {
            this.pendingRequest = 0;
          }
          delete this.pending[element.name];
          $(element).removeClass(this.settings.pendingClass);
          if (
            valid &&
            this.pendingRequest === 0 &&
            this.formSubmitted &&
            this.form()
          ) {
            $(this.currentForm).submit();
            this.formSubmitted = false;
          } else if (
            !valid &&
            this.pendingRequest === 0 &&
            this.formSubmitted
          ) {
            $(this.currentForm).triggerHandler("invalid-form", [this]);
            this.formSubmitted = false;
          }
        },

        previousValue: function(element, method) {
          return (
            $.data(element, "previousValue") ||
            $.data(element, "previousValue", {
              old: null,
              valid: true,
              message: this.defaultMessage(element, { method: method })
            })
          );
        },

        // Cleans up all forms and elements, removes validator-specific events
        destroy: function() {
          this.resetForm();

          $(this.currentForm)
            .off(".validate")
            .removeData("validator")
            .find(".validate-equalTo-blur")
            .off(".validate-equalTo")
            .removeClass("validate-equalTo-blur");
        }
      },

      classRuleSettings: {
        required: { required: true },
        email: { email: true },
        url: { url: true },
        date: { date: true },
        dateISO: { dateISO: true },
        number: { number: true },
        digits: { digits: true },
        creditcard: { creditcard: true }
      },

      addClassRules: function(className, rules) {
        if (className.constructor === String) {
          this.classRuleSettings[className] = rules;
        } else {
          $.extend(this.classRuleSettings, className);
        }
      },

      classRules: function(element) {
        var rules = {},
          classes = $(element).attr("class");

        if (classes) {
          $.each(classes.split(" "), function() {
            if (this in $.validator.classRuleSettings) {
              $.extend(rules, $.validator.classRuleSettings[this]);
            }
          });
        }
        return rules;
      },

      normalizeAttributeRule: function(rules, type, method, value) {
        // Convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if (
          /min|max|step/.test(method) &&
          (type === null || /number|range|text/.test(type))
        ) {
          value = Number(value);

          // Support Opera Mini, which returns NaN for undefined minlength
          if (isNaN(value)) {
            value = undefined;
          }
        }

        if (value || value === 0) {
          rules[method] = value;
        } else if (type === method && type !== "range") {
          // Exception: the jquery validate 'range' method
          // does not test for the html5 'range' type
          rules[method] = true;
        }
      },

      attributeRules: function(element) {
        var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method,
          value;

        for (method in $.validator.methods) {
          // Support for <input required> in both html5 and older browsers
          if (method === "required") {
            value = element.getAttribute(method);

            // Some browsers return an empty string for the required attribute
            // and non-HTML5 browsers might have required="" markup
            if (value === "") {
              value = true;
            }

            // Force non-HTML5 browsers to return bool
            value = !!value;
          } else {
            value = $element.attr(method);
          }

          this.normalizeAttributeRule(rules, type, method, value);
        }

        // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
        if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
          delete rules.maxlength;
        }

        return rules;
      },

      dataRules: function(element) {
        var rules = {},
          $element = $(element),
          type = element.getAttribute("type"),
          method,
          value;

        for (method in $.validator.methods) {
          value = $element.data(
            "rule" +
              method.charAt(0).toUpperCase() +
              method.substring(1).toLowerCase()
          );
          this.normalizeAttributeRule(rules, type, method, value);
        }
        return rules;
      },

      staticRules: function(element) {
        var rules = {},
          validator = $.data(element.form, "validator");

        if (validator.settings.rules) {
          rules =
            $.validator.normalizeRule(validator.settings.rules[element.name]) ||
            {};
        }
        return rules;
      },

      normalizeRules: function(rules, element) {
        // Handle dependency check
        $.each(rules, function(prop, val) {
          // Ignore rule when param is explicitly false, eg. required:false
          if (val === false) {
            delete rules[prop];
            return;
          }
          if (val.param || val.depends) {
            var keepRule = true;
            switch (typeof val.depends) {
              case "string":
                keepRule = !!$(val.depends, element.form).length;
                break;
              case "function":
                keepRule = val.depends.call(element, element);
                break;
            }
            if (keepRule) {
              rules[prop] = val.param !== undefined ? val.param : true;
            } else {
              $.data(element.form, "validator").resetElements($(element));
              delete rules[prop];
            }
          }
        });

        // Evaluate parameters
        $.each(rules, function(rule, parameter) {
          rules[rule] =
            $.isFunction(parameter) && rule !== "normalizer"
              ? parameter(element)
              : parameter;
        });

        // Clean number parameters
        $.each(["minlength", "maxlength"], function() {
          if (rules[this]) {
            rules[this] = Number(rules[this]);
          }
        });
        $.each(["rangelength", "range"], function() {
          var parts;
          if (rules[this]) {
            if ($.isArray(rules[this])) {
              rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
            } else if (typeof rules[this] === "string") {
              parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
              rules[this] = [Number(parts[0]), Number(parts[1])];
            }
          }
        });

        if ($.validator.autoCreateRanges) {
          // Auto-create ranges
          if (rules.min != null && rules.max != null) {
            rules.range = [rules.min, rules.max];
            delete rules.min;
            delete rules.max;
          }
          if (rules.minlength != null && rules.maxlength != null) {
            rules.rangelength = [rules.minlength, rules.maxlength];
            delete rules.minlength;
            delete rules.maxlength;
          }
        }

        return rules;
      },

      // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
      normalizeRule: function(data) {
        if (typeof data === "string") {
          var transformed = {};
          $.each(data.split(/\s/), function() {
            transformed[this] = true;
          });
          data = transformed;
        }
        return data;
      },

      // http://jqueryvalidation.org/jQuery.validator.addMethod/
      addMethod: function(name, method, message) {
        $.validator.methods[name] = method;
        $.validator.messages[name] =
          message !== undefined ? message : $.validator.messages[name];
        if (method.length < 3) {
          $.validator.addClassRules(name, $.validator.normalizeRule(name));
        }
      },

      // http://jqueryvalidation.org/jQuery.validator.methods/
      methods: {
        // http://jqueryvalidation.org/required-method/
        required: function(value, element, param) {
          // Check if dependency is met
          if (!this.depend(param, element)) {
            return "dependency-mismatch";
          }
          if (element.nodeName.toLowerCase() === "select") {
            // Could be an array for select-multiple or a string, both are fine this way
            var val = $(element).val();
            return val && val.length > 0;
          }
          if (this.checkable(element)) {
            return this.getLength(value, element) > 0;
          }
          return value.length > 0;
        },

        // http://jqueryvalidation.org/email-method/
        email: function(value, element) {
          // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
          // Retrieved 2014-01-14
          // If you have a problem with this implementation, report a bug against the above spec
          // Or use custom methods to implement your own email validation
          return (
            this.optional(element) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              value
            )
          );
        },

        // http://jqueryvalidation.org/url-method/
        url: function(value, element) {
          // Copyright (c) 2010-2013 Diego Perini, MIT licensed
          // https://gist.github.com/dperini/729294
          // see also https://mathiasbynens.be/demo/url-regex
          // modified to allow protocol-relative URLs
          return (
            this.optional(element) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              value
            )
          );
        },

        // http://jqueryvalidation.org/date-method/
        date: function(value, element) {
          return (
            this.optional(element) ||
            !/Invalid|NaN/.test(new Date(value).toString())
          );
        },

        // http://jqueryvalidation.org/dateISO-method/
        dateISO: function(value, element) {
          return (
            this.optional(element) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              value
            )
          );
        },

        // http://jqueryvalidation.org/number-method/
        number: function(value, element) {
          return (
            this.optional(element) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
          );
        },

        // http://jqueryvalidation.org/digits-method/
        digits: function(value, element) {
          return this.optional(element) || /^\d+$/.test(value);
        },

        // http://jqueryvalidation.org/minlength-method/
        minlength: function(value, element, param) {
          var length = $.isArray(value)
            ? value.length
            : this.getLength(value, element);
          return this.optional(element) || length >= param;
        },

        // http://jqueryvalidation.org/maxlength-method/
        maxlength: function(value, element, param) {
          var length = $.isArray(value)
            ? value.length
            : this.getLength(value, element);
          return this.optional(element) || length <= param;
        },

        // http://jqueryvalidation.org/rangelength-method/
        rangelength: function(value, element, param) {
          var length = $.isArray(value)
            ? value.length
            : this.getLength(value, element);
          return (
            this.optional(element) || (length >= param[0] && length <= param[1])
          );
        },

        // http://jqueryvalidation.org/min-method/
        min: function(value, element, param) {
          return this.optional(element) || value >= param;
        },

        // http://jqueryvalidation.org/max-method/
        max: function(value, element, param) {
          return this.optional(element) || value <= param;
        },

        // http://jqueryvalidation.org/range-method/
        range: function(value, element, param) {
          return (
            this.optional(element) || (value >= param[0] && value <= param[1])
          );
        },

        // http://jqueryvalidation.org/step-method/
        step: function(value, element, param) {
          var type = $(element).attr("type"),
            errorMessage =
              "Step attribute on input type " + type + " is not supported.",
            supportedTypes = ["text", "number", "range"],
            re = new RegExp("\\b" + type + "\\b"),
            notSupported = type && !re.test(supportedTypes.join());

          // Works only for text, number and range input types
          // TODO find a way to support input types date, datetime, datetime-local, month, time and week
          if (notSupported) {
            throw new Error(errorMessage);
          }
          return this.optional(element) || value % param === 0;
        },

        // http://jqueryvalidation.org/equalTo-method/
        equalTo: function(value, element, param) {
          // Bind to the blur event of the target in order to revalidate whenever the target field is updated
          var target = $(param);
          if (
            this.settings.onfocusout &&
            target.not(".validate-equalTo-blur").length
          ) {
            target
              .addClass("validate-equalTo-blur")
              .on("blur.validate-equalTo", function() {
                $(element).valid();
              });
          }
          return value === target.val();
        },

        // http://jqueryvalidation.org/remote-method/
        remote: function(value, element, param, method) {
          if (this.optional(element)) {
            return "dependency-mismatch";
          }

          method = (typeof method === "string" && method) || "remote";

          var previous = this.previousValue(element, method),
            validator,
            data,
            optionDataString;

          if (!this.settings.messages[element.name]) {
            this.settings.messages[element.name] = {};
          }
          previous.originalMessage =
            previous.originalMessage ||
            this.settings.messages[element.name][method];
          this.settings.messages[element.name][method] = previous.message;

          param = (typeof param === "string" && { url: param }) || param;
          optionDataString = $.param($.extend({ data: value }, param.data));
          if (previous.old === optionDataString) {
            return previous.valid;
          }

          previous.old = optionDataString;
          validator = this;
          this.startRequest(element);
          data = {};
          data[element.name] = value;
          $.ajax(
            $.extend(
              true,
              {
                mode: "abort",
                port: "validate" + element.name,
                dataType: "json",
                data: data,
                context: validator.currentForm,
                success: function(response) {
                  var valid = response === true || response === "true",
                    errors,
                    message,
                    submitted;

                  validator.settings.messages[element.name][method] =
                    previous.originalMessage;
                  if (valid) {
                    submitted = validator.formSubmitted;
                    validator.resetInternals();
                    validator.toHide = validator.errorsFor(element);
                    validator.formSubmitted = submitted;
                    validator.successList.push(element);
                    validator.invalid[element.name] = false;
                    validator.showErrors();
                  } else {
                    errors = {};
                    message =
                      response ||
                      validator.defaultMessage(element, {
                        method: method,
                        parameters: value
                      });
                    errors[element.name] = previous.message = message;
                    validator.invalid[element.name] = true;
                    validator.showErrors(errors);
                  }
                  previous.valid = valid;
                  validator.stopRequest(element, valid);
                }
              },
              param
            )
          );
          return "pending";
        }
      }
    });

    // Ajax mode: abort
    // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
    // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

    var pendingRequests = {},
      ajax;

    // Use a prefilter if available (1.5+)
    if ($.ajaxPrefilter) {
      $.ajaxPrefilter(function(settings, _, xhr) {
        var port = settings.port;
        if (settings.mode === "abort") {
          if (pendingRequests[port]) {
            pendingRequests[port].abort();
          }
          pendingRequests[port] = xhr;
        }
      });
    } else {
      // Proxy ajax
      ajax = $.ajax;
      $.ajax = function(settings) {
        var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
          port = ("port" in settings ? settings : $.ajaxSettings).port;
        if (mode === "abort") {
          if (pendingRequests[port]) {
            pendingRequests[port].abort();
          }
          pendingRequests[port] = ajax.apply(this, arguments);
          return pendingRequests[port];
        }
        return ajax.apply(this, arguments);
      };
    }
  });
  /* jshint ignore:end */
}

// ------------------------------------- Polyfill includes
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

// ------------------------------------- Polyfill Object.assign
if (typeof Object.assign != "function") {
  Object.assign = function(target, varArgs) {
    // .length of function is 2
    "use strict";
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError("Cannot convert undefined or null to object");
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

// ------------------------------------- COMMON METHODS
window.exp23.common.methods = (function() {
  "use strict";
  /**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
  function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }

    // other browser
    return false;
  }

  function sendData(url, callback, data, method) {
    "use strict";
    $("#errorMessage").css({ display: "none" });
    $(".submit_btn").before($(window.exp23.common.spinner));

    ////console.log("Data to send:::: ", JSON.stringify(data));
    $.ajax({
      url: url, //+ "error",
      data: JSON.stringify(data),
      type: "POST",
      success: function(response) {
        ////console.log("AJAX RESPONSE:: ", response);
        if (response.user) window.signInInfo = response.user;
        callback(response);
      },
      error: function(xhr) {
        ////console.log("AJAX ERROR:: ", xhr);
        callback("error");
      },
      contentType: "application/json; charset=utf-8"
    });
  }

  function clearInputs() {
    $(".alert.error.no-pading-bottom.no-margin-bottom").css({
      display: "none"
    });

    $("#name_exp23a_signUp").val("");
    $("#email_exp23a_signUp").val("");
    $("#company_exp23a_signUp").val("");
    $("#role_exp23a_signUp").val("");

    $("#email_exp23a_signIn").val("");
    $("#password_exp23a_signIn").val("");

    $("#email_exp23a_forgotPassword").val("");

    $("#formExp23_SignUp").validate().resetForm();
    $("#formExp23_SignIn").validate().resetForm();
    $("#formExp23_forgotPassword").validate().resetForm();

    $(".captcha-wrapper .error p").remove();

    if (window.exp23.common.methods.currentWindow === ".ab-exp-23_signUp") {
      grecaptcha.reset(window.widgetId1);
    } else if (
      window.exp23.common.methods.currentWindow === ".ab-exp-23_forgotPassword"
    ) {
      grecaptcha.reset(window.widgetId2);
    }
  }

  function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getToken() {
    if (!location.origin.includes("redesign-uat")) {
      // PRD
      return "e6470bb5-c173-43ec-bc0f-26869a97d4dc";
    } else {
      // UAT
      return "ea61d409-4c12-4f03-bba7-0fab445e673a";
    }
  }
  function getCaptcha(response) {
    var googleResponse;

    if (window.exp23.common.methods.currentWindow === ".ab-exp-23_signUp") {
      googleResponse = grecaptcha.getResponse(window.widgetId1);
    } else if (
      window.exp23.common.methods.currentWindow === ".ab-exp-23_forgotPassword"
    ) {
      googleResponse = grecaptcha.getResponse(window.widgetId2);
    }

    ////console.log("captcha response", googleResponse);

    if (!googleResponse) {
      if (window.exp23.common.methods.currentWindow === ".ab-exp-23_signUp") {
        $("#formExp23_SignUp .captcha-wrapper .error").html(
          $(
            '<p class="help-block-captcha">Please verify that you are not a robot.</p>" '
          )
        );
      } else if (
        window.exp23.common.methods.currentWindow ===
        ".ab-exp-23_forgotPassword"
      ) {
        $("#formExp23_forgotPassword .captcha-wrapper .error").html(
          $(
            '<p class="help-block-captcha">Please verify that you are not a robot.</p>" '
          )
        );
      }
      ////console.log("captcha ERROR");
      return false;
    } else {
      ////console.log("captcha Fine");
      $(".captcha-wrapper .help-block-captcha").remove();
      return true;
    }
  }

  function validateEmail(email) {
    "use strict";
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function scrollListenner(e) {
    var st = $(this).scrollTop();
    // var wh = $(document).height() - $(window).height();
    // var perc = st * 100 / wh;
    var perc = window.scrollY || window.pageYOffset;
    // ////console.log("scroll Y ", parseInt(perc));
    //
    if ($(window).width() < 768) {
      console.log(
        "Page Width:" +
          $(window).width() +
          "exp23 Form Not showing below 768px width"
      );
    }
    //
    if (
      perc >= window.exp23.common.scrollStep &&
      $(window).width() > 768 &&
      !/Mobi/.test(navigator.userAgent)
    ) {
      ////console.log("Scroll " + window.exp23.common.scrollStep + "% reached");
      // debugger
      window.exp23.common.fromEmail = false;
      window.scrollTo(0, window.exp23.common.scrollStep - 2);
      // window.exp23.common.scrollStep += window.exp23.common.scrollInterval;
      window.onscroll = null;
      $(window).off("scroll", window.exp23.common.scrollListenner);
      // debugger
      /* Called on Modal Show */
      if (window._satellite != undefined)
        window._satellite.track("trackExp23ModalShow");

      window.exp23.common.methods.setCookie("abScrollY", st, 1);

      if (window.exp23.common.methods.getParameterByName("cid") != null) {
        ////console.log("Showing Sign In Email");
        window.exp23.common.methods.showABForm(".ab-exp-23_signIn");
      } else if (window.exp23.common.isNew) {
        ////console.log("Showing Sign Up");
        window.exp23.common.methods.showABForm(".ab-exp-23_signUp");
      } else if (!window.exp23.common.isSignedIn) {
        ////console.log("Showing Sign In");
        window.exp23.common.methods.showABForm(".ab-exp-23_signIn");
      }

      // $("body").css("overflow", "hidden");

      $("body").css({
        width: "100%",
        position: "fixed",
        "overflow-y": "scroll",
        top: -(window.exp23.common.scrollStep - 2)
      });
      if (!!window.exp23.common.methods.detectIE()) {
        $("body").addClass("fixedBody");
      }
      window.scrollTo(0, (window.scrollY || window.pageYOffset) + 1);
      //
      window.checkShow = setInterval(function() {
        // ////console.log($('.sticky-share-tools._show').length);
        if ($(".sticky-share-tools._show").length == 0) {
          $(".sticky-share-tools")
            .css("display", "block", "important")
            .addClass("_show");
        }
      }, 50);
      // debugger
      setTimeout(function() {
        clearInterval(window.checkShow);
      }, 800);
      // bring captcha to front
      window.exp23.common.methods.checkRecaptchaWrapper(true);
    }
  }

  function focusTitle(element) {
    setTimeout(function() {
      $(element).focus();
    }, 100);
  }

  function showABForm(target) {
    ////console.log("Show window ", target);
    if (window.exp23.common.firstRun) {
      $(target + ".popup-window").hide().fadeIn("fast");
    } else {
      $(target + ".popup-window").show();
    }
    window.exp23.common.firstRun = false;
    window.exp23.common.methods.currentWindow = target;
  }

  function hideABForm(target) {
    ////console.log("Hide Form!!!", target);
    $(target + ".popup-window").hide();
    //
    setTimeout(function() {
      if (window.exp23.common.toClose) {
        ////console.log("hideABForm() :: onscroll");
        $("body").removeAttr("style");
        $(window).on("scroll", window.exp23.common.methods.scrollListenner);
        window.onscroll = window.exp23.common.methods.scrollListenner;
        if (!window.exp23.common.fromEmail)
          window.scrollTo(0, window.exp23.common.scrollStep - 2);
      }
    }, 50);
    return false;
  }

  function botCheck() {
    var botPattern =
      "(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
    var re = new RegExp(botPattern, "i");
    var userAgent = navigator.userAgent;
    if (re.test(userAgent)) {
      return true;
    } else {
      return false;
    }
  }

  var setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  function readCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function hideAllWindowsBut(toHide) {
    "use strict";
    var forms = [
      ".ab-exp-23_signIn",
      ".ab-exp-23_signUp",
      ".ab-exp-23_forgotPassword"
    ];
    forms
      .filter(function(item) {
        return item != toHide;
      })
      .map(function(item) {
        window.exp23.common.methods.hideABForm(item);
      });
    window.exp23.common.methods.currentWindow = toHide;
  }

  function switchWindow(windowToOpen) {
    window.exp23.common.methods.clearInputs();
    window.exp23.common.toClose = false;
    window.exp23.common.methods.hideAllWindowsBut(windowToOpen);
    //
    window.exp23.common.methods.showABForm(windowToOpen);

    // bring captcha to front
    window.exp23.common.methods.checkRecaptchaWrapper(true);
  }

  function moveCaptchaFront() {
    window.exp23.common.methods.checkCaptcha = setInterval(
      window.exp23.common.methods.checkRecaptchaWrapper,
      500
    );
  }

  // DETECT RECAPTCHA WRAPPER AND SET POSITION FIXED
  function checkRecaptchaWrapper(omit) {
    // $('.g-recaptcha-bubble-arrow').first().parent().css({"position":"fixed"})

    if ($(".g-recaptcha-bubble-arrow").length === 4 || omit) {
      ////console.log(
      //   ">>> recaptcha to front ",
      //   $(".g-recaptcha-bubble-arrow").length
      // );
      // $(".g-recaptcha-bubble-arrow").parent().css({ position: "fixed" });

      $("body>div").slice(-2).css({ position: "fixed" });
      clearInterval(window.exp23.common.methods.checkCaptcha);
    }
  }

  return {
    scrollListenner: scrollListenner,
    focusTitle: focusTitle,
    showABForm: showABForm,
    hideABForm: hideABForm,
    botCheck: botCheck,
    sendData: sendData,
    validateEmail: validateEmail,
    setCookie: setCookie,
    readCookie: readCookie,
    hideAllWindowsBut: hideAllWindowsBut,
    getCaptcha: getCaptcha,
    getToken: getToken,
    getParameterByName: getParameterByName,
    clearInputs: clearInputs,
    detectIE: detectIE,
    moveCaptchaFront: moveCaptchaFront,
    checkRecaptchaWrapper: checkRecaptchaWrapper,
    switchWindow: switchWindow
  };
})();
//-------------------------------------------------------------------------------- THIS IS GLOBAL // ^^^

//-------------------------------------------------------------------------------- SIGN UP \\
// ------------------------------------- CSS

window.exp23a.signUp.abcss =
  "<style>\n@media screen and (max-width: 767px) {\n   #signUpWhite,\n    #signInWhite,\n    #formExp23_forgotPassword {\n        display: none !important;\n    }\n}\n\n@media screen and (min-width: 768px) {\n .preloaderSVG { margin-bottom: 20px;  margin-top: -16px; } #signUpWhite .preloaderSVG {margin-top: 16px;margin-bottom: 0px;}   .up.one-up.one-up-medium.one-up-medium-top {\n        margin: 4px 0 0 0 !important;\n        padding-left: 75px !important;\n        padding-right: 75px !important;\n    }\n    .popup-window .popup .popup-content>.up {\n        padding-left: 29px;\n        padding-right: 25px;\n        width: 660px !important;\n        margin: 0;\n    }\n    #signUpWhite section.up,\n    #signInWhite section.up,\n    #formExp23_forgotPassword section.up {\n        margin-top: 40px;\n    }\n    .up.one-up.one-up-medium.one-up-medium-middle {\n        margin-top: 20px !important;\n        width: 100%;\n    }\n    .newPopupWrapper {\n        width: 742px;\n        height: 100%;\n        padding-right: 50px;\n        overflow-y: auto;\n        position: relative;\n        left: -30px;\n        overflow-x: hidden;\n    }\n    #exp23-reload {\n        padding: 2px;\n        font-size: 12px;\n    }\n    .fixedBody {\n        overflow-y: visible !important;\n    }\n    #signUpCaptcha:first-child {\n        width: 300px !important;\n        height: 78px;\n        position: relative !important;\n    }\n    #forgotPasswordCaptcha {\n           }\n    .captcha-wrapper #forgotPasswordCaptcha iframe {\n        left: 0 !important;\n        top: 30px\n    }\n    #signUpWhite .popup .wrapper,\n    #signInWhite .popup .wrapper,\n    #forgotPasswordWhite .popup .wrapper {\n        top: 0;\n        overflow-y: auto;\n        overflow: hidden;\n        height: 100%;\n        position: fixed !important;\n        left: calc(50%) !important;\n        margin: 0 0 0 -350px !important;\n        max-width: 705px !important;\n        -ms-overflow-style: none;\n    }\n    #signUpWhite.ab-exp-23_signUp .popup-content,\n    #signInWhite .popup-content,\n    #forgotPasswordWhite .popup-content {\n        width: 660px;\n        border-radius: 3px;\n    }\n    #signInWhite .popup .wrapper::-webkit-scrollbar,\n    #signUpWhite .popup .wrapper::-webkit-scrollbar,\n    #forgotPasswordWhite .popup .wrapper::-webkit-scrollbar {\n        display: none;\n    }\n    #signInWhite .popup .wrapper::-moz-scrollbar,\n    #signUpWhite .popup .wrapper::-webkit-scrollbar,\n    #forgotPasswordWhite .popup .wrapper::-webkit-scrollbar {\n        display: none;\n    }\n    #signInWhite .popup-content,\n    #signUpWhite .popup-content,\n    #forgotPasswordWhite .popup-content {\n        margin: 40px 0 0 11px;\n    }\n    #signUpWhite .form-content .form-group+.form-group,\n    #signInWhite .form-content .form-group+.form-group,\n    #formExp23_forgotPassword .form-content .form-group+.form-group {\n        margin-top: 30px;\n    }\n    .captcha-wrapper {\n        margin-top: 12px;\n    }\n  #formContent_exp23a_forgotPassword  .captcha-wrapper {\n        margin-top: 40px;\n    }\n    .submit-footer .form-group>p {\n        margin: 0;\n        font-size: 14px;\n    }\n    /* -- Form close btn  -- */\n    .popup-content .closeText {\n        position: relative;\n        text-align: right;\n        font-size: 14px;\n        width: 620px;\n        top: 9px;\n        color: #00ACED;\n        display: inline-block;\n    }\n    .popup-window .popup .popup-content .close-btn {\n        margin: 0;\n    }\n    .popup-window .popup .popup-content .mck-radial-x-icon:before {\n        color: #fff !important;\n        ;\n    }\n    .popup-window .popup .popup-content .mck-radial-x-icon:after {\n        background-color: #2bafe9 !important;\n    }\n    #signUpWhite header {\n        text-align: center;\n    }\n    #signUpWhite input,\n    #signInWhite input {\n        min-height: inherit;\n        border-radius: 3px;\n        width: 290px;\n        height: 34px;\n        padding: 5px !important;\n    }\n    #forgotPasswordWhite input {\n        min-height: inherit;\n        border-radius: 3px;\n        height: 34px;\n        width: 302px !important;\n        padding: 5px !important;\n    }\n    #signUpWhite .up.two-up {\n        margin: 0;\n        width: 100%;\n        text-align: center;\n    }\n    #signUpWhite .form-content .form-group label {\n        margin-bottom: 5px;\n    }\n    #signUpWhite #signUpWhite_btnSubmit,\n    .noAccount {\n        margin-top: 20px;\n    }\n    #signUpWhite .g-recaptcha {\n        position: relative;\n        left: 107px;\n    }\n    .form-content .form-group.has-error label {}\n    .popup-window .popup .popup-content {\n        padding-bottom: 45px;\n    }\n    .popup-window .popup .popup-content .up .module-header {\n        width: 100%;\n    }\n    .popup-window .popup .popup-content .up .module-header h3 {\n        font-size: 42px !important;\n        font-family: Chronicle Deck !important;\n        font-weight: 600;\n        line-height: 1em;\n        color: #00306e;\n        margin-bottom: 6px !important;\n    }\n    .popup-window .popup .popup-content .up .module-header .description.module-description {\n        font-size: 18px;\n        font-family: Chronicle Deck;\n        color: #000;\n        font-weight: 400;\n        line-height: 1.4em;\n        margin-top: 20px;\n    }\n    #signUpWhite.ab-exp-23_signUp.popup-window .form-content_exp23a_signUp {\n        width: 100% !important;\n    }\n    #signUpWhite.ab-exp-23_signUp.popup-window .popup-content .headline {\n        color: #03316c;\n        font-weight: 600;\n        margin-bottom: 30px;\n    }\n    #signUpWhite.ab-exp-23_signUp .form-row:nth-child(3) {\n        margin: 30px 0;\n    }\n    #signUpWhite.ab-exp-23_signUp .ab-message-hidden {\n        display: none;\n    }\n    #signUpWhite.ab-exp-23_signUp #errorMessage {\n        margin-bottom: 10px;\n        padding: 0;\n    }\n    /* -- Form fields  -- */\n    #signUpWhite.ab-exp-23_signUp .form-row {\n        display: table;\n    }\n    #signUpWhite.ab-exp-23_signUp .form-row .form-group:nth-child(1) {\n        padding-right: 10px;\n        display: table-cell;\n        width: 50%;\n    }\n    #signUpWhite.ab-exp-23_signUp .form-row .form-group:nth-child(2) {\n        padding-left: 10px;\n        display: table-cell;\n        width: 50%;\n    }\n    /* -- Form footer -- */\n    #signUpWhite.ab-exp-23_signUp .submit-footer {\n        display: table;\n        margin-top: 35px;\n        width: 100%;\n    }\n    #signUpWhite.ab-exp-23_signUp .submit-footer form-group {\n        display: table-cell;\n    }\n    .form-content .form-group.has-error .help-block {\n        margin: 4px 0 0 0 !important;\n        position: absolute;\n        font-size: 12px;\n        height: 0;\n    }\n    .help-block-captcha {\n        font-size: 12px !important;\n        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n        color: #ed1c24;\n        display: block;\n        padding: 0;\n        border-radius: 3px;\n        margin: 0;\n        position: absolute;\n        width: 430px;\n        text-align: left;\n        padding-left: 151px;\n    }\n    #signUpWhite .help-block-captcha {\n        padding-left: 0px;\n    }\n    #fromSignUpToSignIn,\n    #fromSignInToSignUp,\n    #fromForgotToSignUp,\n    #fromSignInToForgot,\n    #fromForgotToSignIn {\n        font-size: 12px;\n        font-family: Whitney SSm;\n    }\n    #input#signUpWhite_btnSubmit,\n    #signInWhite_btnSubmit,\n    #forgotPasswordWhite_btnSubmit {\n        font-size: 12px;\n    }\n}\n\n\n  </style>";
// ------------------------------------- HTML
window.exp23a.signUp.popupForm = $(
  '<form method="post" id="formExp23_SignUp" novalidate="novalidate" action="">\n    <div class="popup-window ab-exp-23_signUp " id="signUpWhite">\n        <div class="interactive-container _visible">\n            <div class="background"></div>\n            <div class="outer popup">\n                <div class="wrapper">\n                    <div class="popup-content" style="margin-top: 40px;">\n                        <!-- Close btn -->\n                        <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>\n                        <div class="up one-up one-up-medium one-up-medium-top">\n                            <header class="text-xl module-header">\n                                <h3 class="title headline">Sign up to keep reading</h3>\n                            </header>\n                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">\n                                <div class="description module-description">Creating your account gives you access to our latest articles and reports. It\'s fast and free!</div>\n                            </header>\n                        </div>\n                        <div class="up one-up one-up-medium one-up-medium-middle" data-module="PopupForm">\n                            <div class="form-content">\n                                <!-- Error / success msg -->\n                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">\n                                    \n                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>\n                                </div>\n                                <div id="successMessage" class="success-message" style="display: none;">\n                                </div>\n                                <div id="formContent_exp23a_signUp" style="display: block;">\n                                    <div class="form-group ab-message-hidden">\n                                        <label for="contactProfileMessageExpTwenty">PERSONAL MESSAGE</label>\n                                        <textarea  class="required" data-msg-required="Please provide your message." rows="8" cols="20" maxlength="8192" name="contactProfileMessageExpTwenty" id="contactProfileMessageExpTwenty" autofocus=""></textarea>\n                                    </div>\n                                    <div class="form-row">\n                                        <div class="form-group"> \n                                          <label for="name_exp23a_signUp">FULL NAME</label>\n                                            <input  class="required textField" name="name_exp23a_signUp" id="name_exp23a_signUp" maxlength="50" type="text"\n                                                data-msg-required="Please provide your name." aria-required="true">\n                                        </div>\n                                        <div class="form-group"> \n                                          <label for="email_exp23a_signUp">EMAIL</label>\n                                            <input  name="email_exp23a_signUp" id="email_exp23a_signUp" maxlength="128" class="required textField " type="email"\n                                                data-msg-email="Please provide a valid email address." data-msg-required="Please provide your company email address."\n                                                aria-required="true">\n                                        </div>\n                                    </div>\n                                    <div class="form-row">\n                                        <div class="form-group"> \n                                          <label for="company_exp23a_signUp">COMPANY</label>\n                                            <input  class="required textField" name="company_exp23a_signUp" data-msg-required="Please provide an organization name."\n                                                id="company_exp23a_signUp" maxlength="50" type="text" data-rule-spam="true"\n                                                data-msg-spam="Please provide a valid company name." data-pattern="[<>%?^()]"\n                                                aria-required="true">\n                                        </div>\n\n                                        <div class="form-group"> \n                                          <label for="role_exp23a_signUp">ROLE</label>\n                                            <input  class="required textField" name="role_exp23a_signUp" id="role_exp23a_signUp" maxlength="50" data-msg-required="Please provide a role."\n                                                type="text" data-rule-spam="true" data-msg-spam="Please provide a valid title."\n                                                aria-required="true">\n                                        </div>\n                                    </div>\n\n                                    <section class="up two-up">\n                                        <div class="captcha-wrapper">\n                                            <div id="signUpCaptcha" class="form-group" data-module="Recaptcha">\n\n                                                \n\n\n                                              \n                  \n\n\n\n                                            </div>\n                                            <span class="error"></span>\n                                        </div>\n\n                                    <div class="submit-footer">\n                                        <div class="form-group">\n                                            <p>From time to time we may send you email, but you can opt out at any time.</p>\n                                           <div class="submit_btn"> <input  name="signUpWhite_btnSubmit"  id="signUpWhite_btnSubmit" type="button" value="KEEP READING" class="btn-submit"></div>\n                                        </div>\n\n                                        <div class="noAccount">\n                                            <span><a href="javascript:void(0);" id="fromSignUpToSignIn" rel="nofollow">Have an account?</a></span>\n                                        </div>\n                                    </div>\n\n                                    </section>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>'
);
// ------------------------------------- POPUP PROPERTIES
window.exp23a.signUp.props = (function() {
  "use strict";
  var selectors = {
      form: "formExp23_SignUp",
      formSelector: "form-content",
      submitBtn: "btnSubmit",
      contactProfileButton: "signUpWhite_btnSubmit",
      formContent: "formContent_exp23a_signUp",
      requiredMessage: "requiredMessageDescription",
      successMessage: "successMessage",
      errorMessage: "errorMessage"
    },
    a = {
      contactProfile:
        "/services/ContentAPI/mobileapi.svc/register?apiver=3&token=" +
        window.exp23.common.methods.getToken()
    },
    s = {
      popupForm: $("#" + selectors.form),
      formContainer: $("#" + selectors.form).find("." + selectors.formSelector),
      popupFormBtn: $("#" + selectors.form).find(
        "[id$=" + selectors.submitBtn + "]"
      )
    },
    l = function(e, n, r) {
      $("#" + selectors.form).valid();
      if ($("#" + selectors.form).valid()) {
        d(e);
        window.exp23.common.methods.sendData(n, f, r, "POST");
      }
    },
    u = function() {
      $("#" + selectors.contactProfileButton).bind("click", c);
    },
    c = function() {
      var tempPassword = Math.random().toString(36).slice(-14);
      $("#" + selectors.form).valid();
      if (!window.exp23.common.methods.getCaptcha()) return false;
      var userName=  $("#" + selectors.form + " input[name=name_exp23a_signUp]").val().trim().split(' ')[0];
      var userLastname = $("#" + selectors.form + " input[name=name_exp23a_signUp]").val().trim();
      userLastname = userLastname.slice(userLastname.indexOf(' '));
      //
      var e = {
        user: {
          firstname: userName,
          lastname: userLastname,
          username: $(
            "#" + selectors.form + " input[name=email_exp23a_signUp]"
          ).val(),
          companyName: $(
            "#" + selectors.form + " input[name=company_exp23a_signUp]"
          ).val(),
          password: tempPassword,
          confirmPassword: tempPassword,
          title: 8,
          otherJobTitle: $(
            "#" + selectors.form + " input[name=role_exp23a_signUp]"
          ).val(),
          source: "S0012"
        }
      };
      //

      l("#" + selectors.contactProfileButton, a.contactProfile, e);
    },
    d = function(e) {
      $("#" + selectors.form).valid();
      $(e).off("click");
      $(e).addClass("disable-submit");
    },
    f = function(e) {
      // debugger
      $(".preloaderSVG").remove();
      if (!e.success) {
        ////console.log("e error " + e);
        $("#" + selectors.form + " #" + selectors.errorMessage).css(
          "display",
          "block"
        ), $("#" + selectors.form + " #" + selectors.errorMessage + " p").text(
          e.localizedError
        ), $("#" + selectors.form + " .form-group")
          .first()
          .find("input")
          .focus();
      } else {
        // track successful registrations -- this is our primary metric
        window.optimizely.push(["trackEvent", "exp_23_register"]);
        // window.exp23.common.isSignedIn = true;
        // $('#exp23_signUp_confirmation').animate({ bottom: 0 }).show();
        // window.exp23.common.methods.hideAllWindowsBut('hideAll');

        // '<userId>~~~~<firstname>~~~~<lastname>~~~~<username>~~~~<jobtitle>~~~~<companysize>';
        var theValue =
          "" +
          (window.signInInfo.userId || "") +
          "~~~~" +
          (window.signInInfo.firstname || "") +
          "~~~~" +
          (window.signInInfo.lastname || "") +
          "~~~~" +
          (window.signInInfo.username || "") +
          "~~~~" +
          (window.signInInfo.title || "") +
          "~~~~" +
          (window.signInInfo.companySize || "");
        ////console.log("signInInfo:: ", btoa(theValue), atob(btoa(theValue)));
        $("#hidCookie").val(btoa(theValue));

        window.exp23.common.methods.setCookie("abSignedIn", "signup", 1);

        // setTimeout(function() {
        //     //  location.reload();
        __doPostBack("hidCookie", "NoArgument");
        // }, 5000);
      }
      u();
      $(
        "#" + selectors.form + " #" + selectors.contactProfileButton
      ).removeClass("disable-submit");
    },
    init = function() {
      "use strict";
      ////console.log("Sign Up INIT!");
      //////console.log('Error', $(e).closest(".form-group"))
      $.validator.setDefaults({
        ignore: "",
        highlight: function(e) {
          $(e).closest(".form-group").addClass("has-error");
          //////console.log('Error', $(e).closest(".form-group"))
        },
        unhighlight: function(e) {
          $(e).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block"
      });

      $.validator.addMethod(
        "validEmail2",
        function(value, element) {
          return window.exp23.common.methods.validateEmail(value);
        },
        "Please enter a valid email."
      );

      $.validator.addMethod(
        "isFilled",
        function(value, element) {
          return value.trim() !== "";
        },
        ""
      );

      $.validator.addMethod(
        "lettersonly",
        function(value, element) {
          return this.optional(element) || /^[a-z ]+$/i.test(value);
        },
        // ""
        "Only alphabetic characters allowed."
      );

      $.validator.addMethod(
        "isFullname",
        function(value, element) {
            ////console.log("IS FULLNAME FILTER  ", /\s/g.test(value.trim()));
          return /\s/g.test(value.trim());
        },
        ""
      );

      $("#" + selectors.contactProfileButton).on("keydown", function(e) {
        $("this:focus") &&
          9 === e.which &&
          (
            e.preventDefault(),
            $("#" + selectors.form + " input[name=name_exp23a_signUp]").focus()
          );
      });

      $("#" + selectors.form).validate({
        submitHandler: function(e) {
          //////console.log('submitHandler');
          var n = s.popupFormBtn.data("action");
          n &&
            "" !== n &&
            s.formContainer.is(":visible") &&
            s.popupForm.attr("action", n), $(e)[0].submit();
        },
        ignore: ":hidden",
        invalidHandler: function(e, n) {
          //////console.log('invalid handler');
          var r = n.numberOfInvalids();
          r && n.errorList[0].element.focus(), $(".popup-login-error").hide();
        },
        rules: {
          name_exp23a_signUp: {
            required: true,
            isFilled: true,
            isFullname:true,
            lettersonly: true,
            minlength: 1
          },
          email_exp23a_signUp: {
            required: true,
            isFilled: true,
            minlength: 1,
            validEmail2: true
            // nofreeemail2: true
          },
          role_exp23a_signUp: {
            required: true,
            isFilled: true,
            minlength: 1
          },
          company_exp23a_signUp: {
            required: true,
            isFilled: true,
            minlength: 1
          }
        },
        messages: {
          name_exp23a_signUp: {
            isFilled: $("#" + selectors.form + " #name_exp23a_signUp").data(
              "msg-required"
            ),
            // email: $('#email_exp23a_signUp').data('msg-email'),
            lettersonly: "Please remove the numbers.",
            isFullname: "Please enter your name and lastname."
            // nofreeemail2: "Please provide your company email address."
          },
          email_exp23a_signUp: {
            required: $("#" + selectors.form + " #email_exp23a_signUp").data(
              "msg-required"
            ),
            // email: $('#email_exp23a_signUp').data('msg-email'),
            validEmail2: $("#" + selectors.form + " #email_exp23a_signUp").data(
              "msg-email"
            )
            // nofreeemail2: "Please provide your company email address."
          },
          role_exp23a_signUp: $(
            "#" + selectors.form + " #role_exp23a_signUp"
          ).data("msg-required"),
          company_exp23a_signUp: $(
            "#" + selectors.form + " #company_exp23a_signUp"
          ).data("msg-required")
        }
      });

      $("#" + selectors.form).keypress(function(e) {
        return 13 === e.which &&
        "textarea" !== e.target.type &&
        $("#" + selectors.form).valid() &&
        $("#" + selectors.form + " #" + selectors.contactProfileButton).is(
          ":visible"
        )
          ? (
              $(
                "#" + selectors.form + " #" + selectors.contactProfileButton
              ).trigger("click"),
              !1
            )
          : void 0;
      });

      u();
    };
  return {
    selectors: selectors,
    init: init,
    a: a,
    s: s,
    l: l,
    u: u,
    c: c,
    d: d,
    f: f
  };
})();
//-------------------------------------------------------------------------------- SIGN UP // ^^^

//-------------------------------------------------------------------------------- SIGN IN \\
// ------------------------------------- CSS
window.exp23a.signIn.abcss =
  "<style>\n    @media screen and (max-width: 767px) {\n        .popup-window.ab-exp-23_signIn {\n            display: none !important;\n        }\n    }\n    \n    @media screen and (min-width: 768px) {\n        #signInWhite header {\n            text-align: center;\n        }\n        #signInWhite #signInWhiteContent {\n            width: 100%;\n            text-align: center;\n        }\n        .form-content .form-group .controls-group {\n            text-align: left;\n            display: inline-table;\n        }\n        #signInWhite .form-content .form-group label {\n            display: block !important;\n        }\n        \n\n        .ab-exp-23_signIn.popup-window .form-content {\n            width: 100% !important;\n        }\n        .ab-exp-23_signIn.popup-window .popup-content .headline {\n            color: #03316c;\n            font-weight: 600;\n            margin-bottom: 30px;\n        }\n        .ab-exp-23_signIn .ab-message-hidden {\n            display: none;\n        }\n        .ab-exp-23_signIn #errorMessage {\n            margin-bottom: 10px;\n            padding: 0;\n        }\n\n        #signInWhite .form-content .form-group label {\n            margin-bottom: 5px;\n        }\n\n    }\n</style>";
// ------------------------------------- HTML
window.exp23a.signIn.popupForm = $(
  '<form method="post" id="formExp23_SignIn" novalidate="novalidate" action="" >\n    <div class="popup-window ab-exp-23_signIn " id="signInWhite">\n        <div class="interactive-container _visible">\n            <div class="background"></div>\n            <div class="outer popup">\n                <div class="wrapper">\n                    <div class="popup-content">\n                        <!-- Close btn -->\n                       <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  No, thank you </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>\n                        <!-- Header -->\n                        <div class="up one-up one-up-medium one-up-medium-top">\n                            <header class="text-xl module-header">\n                                <h3 class="title headline">Sign in to keep reading</h3>\n                            </header>\n                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">\n                                <div class="description module-description">Welcome back. Signing in gives you access to our latest articles and reports.</div>\n                            </header>\n                        </div>\n                        <div class="up one-up one-up-medium one-up-medium-middle" data-module="PopupForm">\n                            <div id="signInWhiteContent" class="form-content">\n                                <!-- Error / success msg -->\n                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">\n                                   \n                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>\n                                </div >\n                                <div id="successMessage" class="success-message" style="display: none;">\n                                </div >\n                                <!-- Popup Content-->\n                                <div id="formContent_exp23a_signIn" style="display: block;">\n                                    <div id="emailDiv" class="form-group">\n                                        <div class="controls-group">\n                                            <label for="email_exp23a_signIn">Email</label>\n                                            <input class="required textField" name="email_exp23a_signIn" type="email" maxlength="128" id="email_exp23a_signIn" tabindex="1" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address." aria-required="true">\n                                            <span id="emailValidator" style="display: none;"></span>\n                                        </div>\n                                    </div>\n                                    <div id="changePasswordDiv" class="form-group">\n                                        <div class="controls-group">\n                                            <label id="lblPassword" for="password_exp23a_signIn"> Password</label>\n                                            <input class="required textField" name="password_exp23a_signIn" type="password" maxlength="15" id="password_exp23a_signIn" tabindex="2" data-rule-required="true" data-msg-required="Please enter your password." autocomplete="off" aria-required="true">\n                                            <span id="PasswordValidator" style="display: none;"></span>\n                                        </div>\n                                    </div>\n                                    <section class="up two-up">\n                                        <div class="submit_btn">\n                                            <input tabindex="3" id="signInWhite_btnSubmit" type="button" value="KEEP READING" name="signInWhite_btnSubmit" class="btn-submit">\n                                        </div>\n                                        <div class="noAccount">\n                                            <span><a href="javascript:void(0);" id="fromSignInToForgot" rel="nofollow">Forgot password?</a> | \n                                            <a href="javascript:void(0);" id="fromSignInToSignUp" rel="nofollow">Don\'t have an account?</a></span>\n                                        </div>\n                                    </section>\n                                    <input name="__RequestVerificationToken" type="hidden" value="PJhPQ0vqeq0OLXAbdjIQV5qp778e8Nhrx98r2dH1-OnN2JtCfxXz5QQJ1Bx3i1ndyyIRhp9R6I9TGGJzbhPs1xBFoeY1">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n    </div>\n    </div>\n</form>'
);
// ------------------------------------- POPUP PROPERTIES
window.exp23a.signIn.props = (function() {
  "use strict";
  var selectors = {
      form: "formExp23_SignIn",
      formSelector: "form-content",
      submitBtn: "btnSubmit",
      contactProfileButton: "signInWhite_btnSubmit",
      formContent: "formContent_exp23a_signIn",
      requiredMessage: "requiredMessageDescription",
      successMessage: "successMessage",
      errorMessage: "errorMessage"
    },
    a = {
      contactProfile:
        "/services/ContentAPI/mobileapi.svc/login?apiver=3&token=" +
        window.exp23.common.methods.getToken() //0b2edb5f-edea-4b7c-88e0-215a714e489b"
    },
    s = {
      popupForm: $("#" + selectors.form),
      formContainer: $("#" + selectors.form).find("." + selectors.formSelector),
      popupFormBtn: $("#" + selectors.form).find(
        "[id$=" + selectors.submitBtn + "]"
      )
    },
    l = function(e, n, r) {
      $("#" + selectors.form).valid();
      if ($("#" + selectors.form).valid()) {
        d(e);
        window.exp23.common.methods.sendData(n, f, r, "POST");
      }
    },
    u = function() {
      $("#" + selectors.contactProfileButton).bind("click", c);
    },
    c = function() {
      var tempPassword = Math.random().toString(36).slice(-14);
      $("#" + selectors.form).valid();
      var e = {
        password: $(
          "#" + selectors.form + " input[name=password_exp23a_signIn]"
        ).val(),
        username: $(
          "#" + selectors.form + " input[name=email_exp23a_signIn]"
        ).val()
      };
      //
      l("#" + selectors.contactProfileButton, a.contactProfile, e);
    },
    d = function(e) {
      $("#" + selectors.form).valid();
      $(e).off("click");
      $(e).addClass("disable-submit");
    },
    f = function(e) {
      // debugger
      $(".preloaderSVG").remove();
      if (!e.success) {
        ////console.log("e error " + e);
        $("#" + selectors.form + " #" + selectors.errorMessage).css(
          "display",
          "block"
        ), $("#" + selectors.form + " #" + selectors.errorMessage + " p").text(
          e.localizedError
        ), $("#" + selectors.form + " .form-group")
          .first()
          .find("input")
          .focus();
      } else {
        // track successful logins
        window.optimizely.push(["trackEvent", "exp23_login"]);
        // window.exp23.common.isSignedIn = true;
        // $('#exp23_signUp_confirmation h1.confirmationTitle').text('You are now signed In');
        // // $('#exp23_signUp_confirmation p.confirmationDescription').html('Signed In description');
        // $('#exp23_signUp_confirmation').animate({ bottom: 0 }).show();
        // window.exp23.common.methods.hideAllWindowsBut('hideAll');

        // '<userId>~~~~<firstname>~~~~<lastname>~~~~<username>~~~~<jobtitle>~~~~<companysize>';
        var theValue =
          "" +
          (window.signInInfo.userId || "") +
          "~~~~" +
          (window.signInInfo.firstname || "") +
          "~~~~" +
          (window.signInInfo.lastname || "") +
          "~~~~" +
          (window.signInInfo.username || "") +
          "~~~~" +
          (window.signInInfo.title || "") +
          "~~~~" +
          (window.signInInfo.companySize || "");
        ////console.log("signInInfo:: ", btoa(theValue), atob(btoa(theValue)));
        $("#hidCookie").val(btoa(theValue));

        window.exp23.common.methods.setCookie("abSignedIn", "signin", 1);

        // setTimeout(function() {
        //     //  location.reload();
        __doPostBack("hidCookie", "NoArgument");
        // }, 5000);
      }
      u();
      $(
        "#" + selectors.form + " #" + selectors.contactProfileButton
      ).removeClass("disable-submit");
    },
    init = function() {
      "use strict";
      ////console.log("Sign In INIT!");
      //////console.log('Error', $(e).closest(".form-group"))
      $.validator.setDefaults({
        ignore: "",
        highlight: function(e) {
          $(e).closest(".form-group").addClass("has-error");
          //////console.log('Error', $(e).closest(".form-group"))
        },
        unhighlight: function(e) {
          $(e).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block"
      });

      $.validator.addMethod(
        "validEmail2",
        function(value, element) {
          return window.exp23.common.methods.validateEmail(value);
        },
        "Please enter a valid email."
      );

      $.validator.addMethod(
        "isFilled",
        function(value, element) {
          //   ////console.log("ISFILLED FILTER  ");
          return value.trim() !== "";
        },
        ""
      );


      $("#" + selectors.contactProfileButton).on("keydown", function(e) {
        $("this:focus") &&
          9 === e.which &&
          (
            e.preventDefault(),
            $("#" + selectors.form + " input[name=email_exp23a_signIn]").focus()
          );
      });

      $("#" + selectors.form).validate({
        submitHandler: function(e) {
          //////console.log('submitHandler');
          var n = s.popupFormBtn.data("action");
          n &&
            "" !== n &&
            s.formContainer.is(":visible") &&
            s.popupForm.attr("action", n), $(e)[0].submit();
        },
        ignore: ":hidden",
        invalidHandler: function(e, n) {
          //////console.log('invalid handler');
          var r = n.numberOfInvalids();
          r && n.errorList[0].element.focus(), $(".popup-login-error").hide();
        },
        rules: {
          password_exp23a_signIn: {
            required: true,
            isFilled: true,
            minlength: 1
          },
          email_exp23a_signIn: {
            required: true,
            isFilled: true,
            minlength: 1,
            validEmail2: true
            // nofreeemail2: true
          }
        },
        messages: {
          name_exp23a_signUp: $(
            "#" + selectors.form + " #password_exp23a_signIn"
          ).data("msg-required"),
          email_exp23a_signUp: {
            required: $("#" + selectors.form + " #email_exp23a_signIn").data(
              "msg-required"
            ),
            validEmail2: $("#" + selectors.form + " #email_exp23a_signIn").data(
              "msg-email"
            )
          }
        }
      });

      $("#" + selectors.form).keypress(function(e) {
        return 13 === e.which &&
        "textarea" !== e.target.type &&
        $("#" + selectors.form).valid() &&
        $("#" + selectors.form + " #" + selectors.contactProfileButton).is(
          ":visible"
        )
          ? (
              $(
                "#" + selectors.form + " #" + selectors.contactProfileButton
              ).trigger("click"),
              !1
            )
          : void 0;
      });

      u();
    };
  return {
    selectors: selectors,
    init: init,
    a: a,
    s: s,
    l: l,
    u: u,
    c: c,
    d: d,
    f: f
  };
})();
//-------------------------------------------------------------------------------- SIGN IN // ^^^
//-------------------------------------------------------------------------------- FORGOT PASSWORD \\
// ------------------------------------- CSS
window.exp23a.forgotPassword.abcss =
  "<style>\n    @media screen and (max-width: 767px) {\n        .popup-window.ab-exp-23_forgotPassword {\n            display: none !important;\n        }\n    }\n    \n    @media screen and (min-width: 768px) {\n\n\n        \n        #forgotPasswordWhite header {\n            text-align: center;\n        }\n        #forgotPasswordWhite #forgotPasswordWhiteContent {\n            width: 100%;\n            text-align: center;\n        }\n        #forgotPasswordWhite .form-content .form-group  {\n            width: 303px;\n            left: 0px;\n            margin: auto auto;\n        }\n        #forgotPasswordWhite .form-content .form-group label {\n            display: block !important;\n        }\n       \n        #forgotPasswordWhite .g-recaptcha{\n            position: relative;\n            left: 0;\n            margin-top: 40px;\n        }\n\n        .ab-exp-23_forgotPassword.popup-window .form-content {\n            width: 100% !important;\n        }\n        .ab-exp-23_forgotPassword.popup-window .popup-content .headline {\n            color: #03316c;\n            font-weight: 600;\n            margin-bottom: 30px;\n        }\n        .ab-exp-23_forgotPassword .ab-message-hidden {\n            display: none;\n        }\n        .ab-exp-23_forgotPassword #errorMessage {\n            margin-bottom: 10px;\n            padding: 0;\n        }\n        .ab-exp-23_forgotPassword .form-content .form-group label {\n            margin-bottom: 5px;\n        }\n    }\n</style>";
// ------------------------------------- HTML
window.exp23a.forgotPassword.popupForm = $(
  '<form method="post" id="formExp23_forgotPassword" novalidate="novalidate" action="">\n    <div class="popup-window ab-exp-23_forgotPassword " id="forgotPasswordWhite">\n        <div class="interactive-container _visible">\n            <div class="background"></div>\n            <div class="outer popup">\n                <div class="wrapper">\n                    <div class="popup-content">\n                        <!-- Close btn -->\n                        <span class="close-btn-holder"> <span class="closeText"><a href="javascript:void(0);">  Close window </a></span><span class="close-btn mck-radial-x-icon" role="link"></span></span>\n                        <!-- Header -->\n                        <div class="up one-up one-up-medium one-up-medium-top">\n                            <header class="text-xl module-header">\n                                <h3 class="title headline">Forgot your password?</h3>\n                            </header>\n                            <header id="requiredMessageDescription" class="text-m module-header success" style="display: block;">\n                                <div class="description module-description">Please enter the email address you use to sign into your account.</div>\n                            </header>\n                        </div>\n                        <!-- Error / success msg -->\n                        <div class="up one-up one-up-medium one-up-medium-middle" data-module="PopupForm">\n                            <div id="forgotPasswordWhiteContent" class="form-content">\n                                <div id="errorMessage" class="alert error no-pading-bottom no-margin-bottom" style="display: none;">\n                                    \n                                    <p id="main_0_universal_0_errormsg">Sorry something went wrong. Please try again</p>\n                                </div >\n                                <div id="successMessage" class="success-message" style="display: none;">\n                                </div >\n                                <!-- Popup Content-->\n                                <div id="formContent_exp23a_forgotPassword" style="display: block;">\n                                    <div id="emailDiv" class="form-group">\n                                        <div class="controls-group">\n                                            <label for="email_exp23a_forgotPassword">Email</label>\n                                            <input name="email_exp23a_forgotPassword" type="email" maxlength="128" id="email_exp23a_forgotPassword" tabindex="1" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address." data-msg-required="Please enter your email address." aria-required="true">\n                                            <span id="emailValidator" style="display: none;"></span>\n                                        </div>\n                                    </div>\n\n\n                                    \n                                    <div class="captcha-wrapper">\n                                        <div id="forgotPasswordCaptcha" class="form-group" data-module="Recaptcha">\n\n\n\n\n\n\n                                        </div>\n                                        <span class="error"></span>\n                                    </div>\n\n\n\n                                    <section class="up two-up">\n                                        <div class="submit_btn">\n                                            <input type="button" name="forgotPasswordWhite_btnSubmit" value="RESET PASSWORD" id="forgotPasswordWhite_btnSubmit" tabindex="3" class="btn-submit">\n                                        </div>\n                                        <div class="noAccount">\n                                            <span><a href="javascript:void(0);" id="fromForgotToSignIn" rel="nofollow">Sign In</a> | \n                                            <a href="javascript:void(0);" id="fromForgotToSignUp" rel="nofollow">Don\'t have an account?</a></span>\n                                        </div>\n                                    </section>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n    </div>\n    </div>\n</form>'
);
// ------------------------------------- POPUP PROPERTIES
window.exp23a.forgotPassword.props = (function() {
  "use strict";
  var selectors = {
      form: "formExp23_forgotPassword",
      formSelector: "form-content",
      submitBtn: "btnSubmit",
      contactProfileButton: "forgotPasswordWhite_btnSubmit",
      formContent: "formContent_exp23a_forgotPassword",
      requiredMessage: "requiredMessageDescription",
      successMessage: "successMessage",
      errorMessage: "errorMessage"
    },
    a = {
      contactProfile:
        "/services/contentapi/mobileapi.svc/forgotpassword?apiver=3&token=" +
        window.exp23.common.methods.getToken() //0b2edb5f-edea-4b7c-88e0-215a714e489b"
    },
    s = {
      popupForm: $("#" + selectors.form),
      formContainer: $("#" + selectors.form).find("." + selectors.formSelector),
      popupFormBtn: $("#" + selectors.form).find(
        "[id$=" + selectors.submitBtn + "]"
      )
    },
    l = function(e, n, r) {
      $("#" + selectors.form).valid();
      if ($("#" + selectors.form).valid()) {
        d(e);
        window.exp23.common.methods.sendData(n, f, r, "POST");
      }
    },
    u = function() {
      $("#" + selectors.contactProfileButton).bind("click", c);
    },
    c = function() {
      $("#" + selectors.form).valid();
      if (!window.exp23.common.methods.getCaptcha()) return false;
      var e = {
        // name: $("#" + selectors.form +" input[name=password_exp23a_signIn]").val(),
        email: $(
          "#" + selectors.form + " input[name=email_exp23a_forgotPassword]"
        ).val()
        // subject: "Exp23a (Digital McKinsey LinkedIn Ads) Submission!",
        // sid: "{463CF901-77AF-44F8-9D94-79884C241D7E}"
      };
      // $("#name_exp23a_signUp").focus();
      l("#" + selectors.contactProfileButton, a.contactProfile, e);
    },
    d = function(e) {
      $("#" + selectors.form).valid();
      $(e).off("click");
      $(e).addClass("disable-submit");
    },
    f = function(e) {
      // ////console.log("display form feedback");
      $(".preloaderSVG").remove();
      ////console.log("e error " + e);
      if (!e.success) {
        if (!e.localizedError.includes("not recognized")) {
          $("#" + selectors.form + " #" + selectors.errorMessage).css(
            "display",
            "block"
          );
          $("#" + selectors.form + " #" + selectors.errorMessage + " p").text(
            e.localizedError
          );
        } else {
          if (
            $("#forgotPasswordWhite #email_exp23a_forgotPassword-error")
              .length > 0
          )
            $("#forgotPasswordWhite #email_exp23a_forgotPassword-error")
              .text(e.localizedError)
              .css("display", "block")
              .closest(".form-group")
              .addClass("has-error");
          else
            $("#forgotPasswordWhite #email_exp23a_forgotPassword")
              .after(
                '<span id="email_exp23a_forgotPassword-error" class="help-block">' +
                  e.localizedError +
                  "</span>"
              )
              .closest(".form-group")
              .addClass("has-error");
        }
        $("#" + selectors.form + " .form-group").first().find("input").focus();
      } else {
        window.exp23a.forgotPassword.forgotHtml = $(
          "#" + selectors.form + " #" + selectors.successMessage
        );

        $("#" + selectors.form + " #" + selectors.formContent).css(
          "display",
          "none"
        );
        $("#" + selectors.form + " #" + selectors.requiredMessage).css(
          "display",
          "none"
        );
        $("#" + selectors.form + " #" + selectors.successMessage).css(
          "display",
          "block"
        );
        $("#" + selectors.form + " #" + selectors.errorMessage).css(
          "display",
          "none"
        );

        $("#" + selectors.form + " h3.title.headline").text("Thank you");
        $("#" + selectors.form + " #" + selectors.successMessage).html(
          window.exp23a.forgotPassword.confirmationMessage
        );
        window.activateForgotReload();
        $("#forgotPW_didNotReceived").on("click", function() {
          $("#" + selectors.form + " h3.title.headline").text(
            "Forgot your password?"
          );
          $("#" + selectors.form + " #" + selectors.successMessage).html(
            window.exp23a.forgotPassword.forgotHtml
          );
          $("#" + selectors.form + " #" + selectors.formContent).css(
            "display",
            "block"
          );
          $("#" + selectors.form + " #" + selectors.requiredMessage).css(
            "display",
            "block"
          );
          $("#" + selectors.form + " #" + selectors.successMessage).css(
            "display",
            "none"
          );
          $(
            "#formContent_exp23a_forgotPassword #email_exp23a_forgotPassword"
          ).val("");
        });
      }
      u();
      $(
        "#" + selectors.form + " #" + selectors.contactProfileButton
      ).removeClass("disable-submit");
    },
    init = function() {
      "use strict";
      ////console.log("Forgot Password INIT!");
      //////console.log('Error', $(e).closest(".form-group"))
      $.validator.setDefaults({
        ignore: "",
        highlight: function(e) {
          $(e).closest(".form-group").addClass("has-error");
        },
        unhighlight: function(e) {
          $(e).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block"
      });

      $.validator.addMethod(
        "validEmail2",
        function(value, element) {
          return window.exp23.common.methods.validateEmail(value);
        },
        "Please enter a valid email."
      );

      $.validator.addMethod(
        "isFilled",
        function(value, element) {
          //   ////console.log("ISFILLED FILTER  ");
          return value.trim() !== "";
        },
        ""
      );

      $("#" + selectors.contactProfileButton).on("keydown", function(e) {
        $("this:focus") &&
          9 === e.which &&
          (
            e.preventDefault(),
            $(
              "#" + selectors.form + " input[name=password_exp23a_signIn]"
            ).focus()
          );
      });

      $("#" + selectors.form).validate({
        submitHandler: function(e) {
          //////console.log('submitHandler');
          var n = s.popupFormBtn.data("action");
          n &&
            "" !== n &&
            s.formContainer.is(":visible") &&
            s.popupForm.attr("action", n), $(e)[0].submit();
        },
        ignore: ":hidden",
        invalidHandler: function(e, n) {
          //////console.log('invalid handler');
          var r = n.numberOfInvalids();
          r && n.errorList[0].element.focus(), $(".popup-login-error").hide();
        },
        rules: {
          password_exp23a_signIn: {
            required: true,
            isFilled: true,
            minlength: 1
          },
          email_exp23a_forgotPassword: {
            required: true,
            isFilled: true,
            minlength: 1,
            validEmail2: true
            // nofreeemail2: true
          }
        },
        messages: {
          password_exp23a_signIn: $(
            "#" + selectors.form + " #password_exp23a_signIn"
          ).data("msg-required"),
          email_exp23a_forgotPassword: {
            required: $(
              "#" + selectors.form + " #email_exp23a_forgotPassword"
            ).data("msg-required"),
            validEmail2: $(
              "#" + selectors.form + " #email_exp23a_forgotPassword"
            ).data("msg-email")
          }
        }
      });

      $("#" + selectors.form).keypress(function(e) {
        return 13 === e.which &&
        "textarea" !== e.target.type &&
        $("#" + selectors.form).valid() &&
        $("#" + selectors.form + " #" + selectors.contactProfileButton).is(
          ":visible"
        )
          ? (
              $(
                "#" + selectors.form + " #" + selectors.contactProfileButton
              ).trigger("click"),
              !1
            )
          : void 0;
      });

      u();
    };
  return {
    selectors: selectors,
    init: init,
    a: a,
    s: s,
    l: l,
    u: u,
    c: c,
    d: d,
    f: f
  };
})();
//-------------------------------------------------------------------------------- FORGOT PASSWORD // ^^^

//-------------------------------------------------------------------------------- FEEDBACK \\
// ------------------------------------- CSS
window.exp23a.signIn.confirmationAbcss =
  "<style>\n        /* feedback popup */\n        #exp23_signUp_confirmation {\n            position: fixed;\n            right: 0;\n            width: 530px;\n            bottom: -200px;\n            background-color: #00adef;\n            padding: 20px 20px 0px 20px;\n            border: 1px solid lightgray;\n            text-align: center;\n        }\n        #exp23_signUp_confirmation span.close-btn.mck-radial-x-icon {\n            position: absolute;\n            right: 40px;\n            top: 2px;\n        }\n        #exp23_signUp_confirmation .mck-radial-x-icon:before {\n            color: #fff !important;\n        }\n        #exp23_signUp_confirmation h1.confirmationTitle {\n       font-size: 41px;\n     color: #fff;\n        }\n        #exp23_signUp_confirmation p.confirmationDescription {\n            color: #00306e;\n        }\n        #exp23_signUp_confirmation a {\n            color: #00306e;\n            text-decoration: underline;\n            font-weight: bold;\n        }\n        #exp23_signUp_confirmation .close-btn:before {\n            position: absolute;\n            display: block;\n            z-index: 2;\n            color: #00adef !important;\n        }\n        \n        #exp23_signUp_confirmation .mck-radial-x-icon:after {\n            background-color: #fff !important;\n        }\n        #exp23_signUp_confirmation .close-btn:after {\n            background-color: #e60c0c;\n            border-radius: 50%;\n            content: '';\n            height: 36px;\n            left: 2px;\n            width: 36px;\n            z-index: 1;\n            position: absolute;\n            top: 2px;\n        }\n</style>";
// ------------------------------------- HTML
window.exp23a.signIn.confirmationHtml = $(
  '<div id="exp23_signUp_confirmation" class="confirmationPopup exp23">\n    <span id="confirmationCloseBtn" class="close-btn mck-radial-x-icon" role="link"></span>\n    <h1 class="confirmationTitle">Thank you for signing up!</h1>\n    <p class="confirmationDescription">Feel free to <a href="/user-registration/manage-account/edit-subscriptions">select your topics of interest</a>  or <a href="/user-registration/manage-account/edit-profile">change your password</a> at any time.</p>\n</div>'
);
//-------------------------------------------------------------------------------- FEEDBACK // ^^^

// ------------------------------------- JQUERY ON READY
$(function() {
  "use strict";
  console.log("Running exp23");
  ////console.log("IS LOGGED IN???? ", McKinsey.LoginStatus === "logged_in");
  if (window.exp23.common.methods.botCheck()) return false; //  it's a boooot

  var vnum = unescape(window.exp23.common.methods.readCookie("s_vnum"));
  var userVisits = vnum ? vnum.split("&")[1].split("=")[1] : 0;
  window.exp23.common.isNew = userVisits < 1; // window.exp23.common.methods.readCookie("s_nr") === undefined || unescape(window.exp23.common.methods.readCookie("s_nr")).toLowerCase().includes("new");
  window.exp23.common.isSignedIn = McKinsey.LoginStatus === "logged_in"; //window.exp23.common.isNew ? false : McKinsey.LoginStatus === "logged_in";

  // ////console.log('IS NEW?? ', window.exp23.common.isNew);
  var readScrollY = parseInt(
    window.exp23.common.methods.readCookie("abScrollY")
  );

  //Check if postback signed in
  var abSignedIn = !!window.exp23.common.methods.readCookie("abSignedIn"); //window.exp23.common.methods.readCookie('abSignedIn')=='1' ? true : false ;
  // ////console.log('- abSignedIn', abSignedIn, window.exp23.common.methods.readCookie('abSignedIn') );

  if (abSignedIn && window.exp23.common.isSignedIn) {
    ////console.log("Is abSignedIn");
    ////console.log("Scrolling to abScrollY ", readScrollY);

    $("head").append(window.exp23a.signIn.confirmationAbcss);
    $("body").append(window.exp23a.signIn.confirmationHtml);

    if (window.exp23.common.methods.readCookie("abSignedIn") === "signin") {
      $("#exp23_signUp_confirmation h1.confirmationTitle").text(
        "You are now signed in"
      );
    }

    ////console.log(
    //   "abSignedIn? ",
    //   window.exp23.common.methods.readCookie("abSignedIn")
    // );

    $("#exp23_signUp_confirmation").animate({ bottom: 0 }).show();

    setTimeout(function() {
      $("#exp23_signUp_confirmation").animate(
        { bottom: -150 },
        {
          complete: function() {
            $(this).hide();
            window.exp23.common.methods.setCookie("abSignedIn", "", 0);
            window.exp23.common.methods.setCookie("abScrollY", 0, 0);
          }
        }
      );
    }, 15000);

    $("#confirmationCloseBtn").on("click", function() {
      $("#exp23_signUp_confirmation").animate(
        { bottom: -150 },
        {
          complete: function() {
            $(this).hide();
            window.exp23.common.methods.setCookie("abSignedIn", "", 0);
            window.exp23.common.methods.setCookie("abScrollY", 0, 0);
          }
        }
      );
    });

    window.scrollTo(0, readScrollY);
    $(window).on("scroll", null);
    window.onscroll = null;

    return false;
  }

  ////console.log("THIS SHOULD NOT BE SEEN WHEN SIGNING IN? ");

  if (window.exp23.common.isSignedIn) return false; //  it's signed in already

  var RC_SITE_KEY = "6LdC5twSAAAAAF0dePIbY_ckeF05mKdYYJXn7uTg";
  window.captchaReady = function() {
    // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
    // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
    window.widgetId1 = grecaptcha.render(
      document.getElementById("signUpCaptcha"),
      {
        sitekey: RC_SITE_KEY,
        callback: exp23captchaCallback,
        theme: "light",
        "expired-callback": exp23expirationCallback
      }
    );
    window.widgetId2 = grecaptcha.render(
      document.getElementById("forgotPasswordCaptcha"),
      {
        sitekey: RC_SITE_KEY,
        callback: exp23captchaCallback,
        theme: "light",
        "expired-callback": exp23expirationCallback
      }
    );
  };

  // reCaptcha script
  //   $("head").append('<script src="https://www.google.com/recaptcha/api.js" async defer></script>');
  $("head").append(
    '<script src="https://www.google.com/recaptcha/api.js?onload=captchaReady&render=explicit" async defer></script>'
  );

  //   $("#signUpCaptcha").html($("#recaptchaElement"));
  //   $("#forgotPasswordCaptcha").html($("#recaptchaElement"));

  function captchaCallback(e) {
    ////console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!! reCaptchaCallback", e);
    window.exp23.common.methods.getCaptcha(e);
  }
  function expCallback(e) {
    ////console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!! reCaptcha EXPIRATION Callback");
    grecaptcha.reset(window.widgetId1);
    grecaptcha.reset(window.widgetId2);

    // DETECT RECAPTCHA WRAPPER AND SET POSITION FIXED
    window.exp23.common.methods.moveCaptchaFront();
  }
  window.exp23expirationCallback = expCallback;
  window.exp23captchaCallback = captchaCallback;

  // ------------------------------------- Adding HTML / CSS
  // $("head").append(window.exp23a.signUp.abcss);
  $("head").append(window.exp23a.signUp.abcss);
  $("body").append(window.exp23a.signUp.popupForm);
  $("head").append(window.exp23a.signIn.abcss);
  $("body").append(window.exp23a.signIn.popupForm);
  $("head").append(window.exp23a.forgotPassword.abcss);
  $("body").append(window.exp23a.forgotPassword.popupForm);

  $(".wrapper .popup-content").wrap('<div class="newPopupWrapper"></div>');

  window.exp23a.forgotPassword.confirmationMessage =
    '<span class="description module-description">We have sent you instructions on how to reset your password.</span>' +
    '                                            <section class="up two-up">' +
    '                                                <div class="submit_btn">' +
    '                                                    <input type="button" value="I am signed in" id="exp23-reload" tabindex="1" class="btn-submit">' +
    "                                                </div>" +
    '                                                <div class="noAccount">' +
    '                                                    <span><a href="javascript:void(0);" id="forgotPW_didNotReceived" rel="nofollow">I did not receive an email</a></span>' +
    "                                                </div>" +
    "                                            </section>"; //onclick="location.reload();"

  // ------------------------------------- Show / Hide windows interaction flow
  $("#fromSignUpToSignIn").on("click", function() {
    window.exp23.common.methods.switchWindow(".ab-exp-23_signIn");
    return false; // prevents the page jump
  });
  $("#fromForgotToSignIn").on("click", function() {
    window.exp23.common.methods.switchWindow(".ab-exp-23_signIn");
    return false; // prevents the page jump
  });
  $("#fromForgotToSignUp").on("click", function() {
    window.exp23.common.methods.switchWindow(".ab-exp-23_signUp");
    return false; // prevents the page jump
  });
  $("#fromSignInToForgot").on("click", function() {
    window.exp23.common.methods.switchWindow(".ab-exp-23_forgotPassword");
    return false; // prevents the page jump
  });
  $("#fromSignInToSignUp").on("click", function() {
    window.exp23.common.methods.switchWindow(".ab-exp-23_signUp");
    return false; // prevents the page jump
  });

  window.activateForgotReload = function() {
    $("#exp23-reload").on("click", function() {
      window.exp23.common.methods.setCookie(
        "abScrollY",
        window.exp23.common.scrollStep,
        1
      );
      window.exp23.common.methods.setCookie("abSignedIn", "signin", 1);
      __doPostBack("hidCookie", "NoArgument");
      //
      ////console.log("reloading!!");
      ////console.log(
      //   "scroll saved in !! " +
      //     window.exp23.common.scrollStep +
      //     "  --> cookie  " +
      //     window.exp23.common.methods.readCookie("abScrollY") +
      //     "  --signed in? " +
      //     window.exp23.common.methods.readCookie("abSignedIn", "signin", 1)
      // );
      return false; // prevents the page jump
    });
  };

  $(".close-btn-holder").on("click", function() {
    if (!window.exp23.common.fromEmail)
      window.scrollTo(0, window.exp23.common.scrollStep - 2);

    window.exp23.common.toClose = true;
    window.exp23.common.methods.clearInputs();
    window.exp23.common.methods.hideAllWindowsBut("hideAll");
    window.exp23.common.firstRun = true;
    // track no thank you clicks
    window.optimizely.push(["trackEvent", "exp_23_nothankyou"]);
    return false; // prevents the page jump
  });

  $(window).on("scroll", window.exp23.common.methods.scrollListenner);
  window.onscroll = window.exp23.common.methods.scrollListenner;

  window.exp23a.signUp.props.init();
  window.exp23a.signIn.props.init();
  window.exp23a.forgotPassword.props.init();

  // DETECT EMAIL LINK
  // var cid = window.exp23.common.methods.getParameterByName("cid");
  // if (cid) {
  //   ////console.log("cid", cid);
  //   window.onscroll = null;
  //   $(window).off("scroll", window.exp23.common.scrollListenner);
  //   /* Called on Modal Show */
  //   if (window._satellite != undefined)
  //     window._satellite.track("trackExp23ModalShow");

  //   window.exp23.common.methods.showABForm(".ab-exp-23_signIn");

  //   window.exp23.common.fromEmail = true;

  //   $("body").css({
  //     width: "100%",
  //     position: "fixed",
  //     "overflow-y": "scroll"
  //   });
  //   if (!!window.exp23.common.methods.detectIE()) {
  //     $("body").addClass("fixedBody");
  //   }

  //   // bring captcha to front
  //   window.exp23.common.methods.checkRecaptchaWrapper(true);
  // }

  // DETECT RECAPTCHA WRAPPER AND SET POSITION FIXED
  window.exp23.common.methods.moveCaptchaFront();
});