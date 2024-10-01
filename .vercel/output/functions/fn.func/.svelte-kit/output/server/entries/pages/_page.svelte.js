import { c as create_ssr_component, b as add_attribute, e as escape, d as each, g as get_store_value, a as subscribe, v as validate_component, f as set_store_value } from "../../chunks/index3.js";
import { S as SEO } from "../../chunks/SEO.js";
import { w as writable, d as derived } from "../../chunks/index2.js";
import { dequal } from "dequal/lite";
import * as yup from "yup";
import { v4 } from "@lukeed/uuid";
import { P as PRODUCT_NAME, a as PRODUCT_CATEGORY, i as isOverlayOpen, e as event_id } from "../../chunks/store.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const Hero1Fallback = "/_app/immutable/assets/hero-frame1.26a13170.png";
const Hero1Webp = "/_app/immutable/assets/hero-frame1.cac33809.webp 800w, /_app/immutable/assets/hero-frame1.e702405d.webp 400w, /_app/immutable/assets/hero-frame1.458d5c0f.webp 200w";
const Hero1Avif = "/_app/immutable/assets/hero-frame1.466d53c8.avif 800w, /_app/immutable/assets/hero-frame1.7e8d3eb8.avif 400w, /_app/immutable/assets/hero-frame1.bf93ff4f.avif 200w";
const Hero1Jpg = "/_app/immutable/assets/hero-frame1.336fae59.jpg 800w, /_app/immutable/assets/hero-frame1.01d5fb73.jpg 400w, /_app/immutable/assets/hero-frame1.16ac8d05.jpg 200w";
const Hero2Fallback = "/_app/immutable/assets/hero-frame2.3603bd5c.png";
const Hero2Webp = "/_app/immutable/assets/hero-frame2.c1e21e90.webp 800w, /_app/immutable/assets/hero-frame2.3dd66080.webp 400w, /_app/immutable/assets/hero-frame2.2a7da348.webp 200w";
const Hero2Avif = "/_app/immutable/assets/hero-frame2.40864c9b.avif 800w, /_app/immutable/assets/hero-frame2.30d367b6.avif 400w, /_app/immutable/assets/hero-frame2.8e2c11cc.avif 200w";
const Hero2Jpg = "/_app/immutable/assets/hero-frame2.99a042d3.jpg 800w, /_app/immutable/assets/hero-frame2.7da44436.jpg 400w, /_app/immutable/assets/hero-frame2.cdf2c5a2.jpg 200w";
const Slideshow_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".slides.svelte-16wau2y.svelte-16wau2y{display:flex;overflow:hidden;width:80vw;height:80vw}img.svelte-16wau2y.svelte-16wau2y{max-width:80vw;height:100%;max-width:46.25rem;max-height:46.25rem}@media(min-width: 640px){.slides.svelte-16wau2y.svelte-16wau2y{width:60vw;height:60vw;max-width:46.25rem;max-height:46.25rem}}@media(min-width: 768px){.slides.svelte-16wau2y.svelte-16wau2y{width:43.5rem;height:43.5rem}}.slides.svelte-16wau2y>.svelte-16wau2y{flex-shrink:0;width:100%;margin-left:0%}.slides.svelte-16wau2y>.svelte-16wau2y:nth-child(1){animation:6s svelte-16wau2y-autoplay infinite ease-in-out}@keyframes svelte-16wau2y-autoplay{0%{margin-left:0%}30%{margin-left:0%}39%{margin-left:-100%}80%{margin-left:-100%}89%{margin-left:0%}100%{margin-left:0%}}.img-container.svelte-16wau2y.svelte-16wau2y{position:relative}img.svelte-16wau2y.svelte-16wau2y{position:absolute;top:0;left:0;max-width:100%;height:auto;object-fit:cover}",
  map: null
};
const widthBase = "80vw";
const widthLarge = "60vw";
const HeroBreakpoint = "640px";
const Slideshow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sizes = `(min-width: ${HeroBreakpoint}) ${widthBase}, ${widthLarge}`;
  $$result.css.add(css$1);
  return `<div class="slides svelte-16wau2y"><div class="img-container svelte-16wau2y"><picture><source${add_attribute("srcset", Hero2Avif, 0)} type="image/avif">
			<source${add_attribute("srcset", Hero2Webp, 0)} type="image/webp">
			<source${add_attribute("srcset", Hero2Jpg, 0)} type="image/jpg">
			<img${add_attribute("sizes", sizes, 0)} loading="eager" decoding="async"${add_attribute("src", Hero2Fallback, 0)} alt="Smile Design" class="svelte-16wau2y"></picture></div>
	<div class="img-container svelte-16wau2y"><picture><source${add_attribute("srcset", Hero1Avif, 0)} type="image/avif">
			<source${add_attribute("srcset", Hero1Webp, 0)} type="image/webp">
			<source${add_attribute("srcset", Hero1Jpg, 0)} type="image/jpg">
			<img${add_attribute("sizes", sizes, 0)} loading="eager" decoding="async"${add_attribute("src", Hero1Fallback, 0)} alt="Smile Design" class="svelte-16wau2y"></picture></div>
</div>`;
});
const goto = /* @__PURE__ */ client_method("goto");
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const durationUnitRegex = /[a-zA-Z]/;
const range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-14x3x60{height:var(--size);width:var(--size);display:flex;align-items:center;justify-content:center}.dot.svelte-14x3x60{height:var(--dotSize);width:var(--dotSize);background-color:var(--color);margin:2px;display:inline-block;border-radius:100%;animation:svelte-14x3x60-sync var(--duration) ease-in-out infinite alternate both running}.pause-animation.svelte-14x3x60{animation-play-state:paused}@-webkit-keyframes svelte-14x3x60-sync{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes svelte-14x3x60-sync{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}",
  map: null
};
const SyncLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "0.6s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
  let durationNum = duration.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css);
  return `<div class="wrapper svelte-14x3x60" style="${"--size:" + escape(size, true) + escape(unit, true) + "; --duration: " + escape(duration, true) + ";"}">${each(range(3, 1), (i) => {
    return `<div class="${["dot svelte-14x3x60", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"--dotSize:" + escape(+size * 0.25, true) + escape(unit, true) + "; --color:" + escape(color, true) + "; animation-delay: " + escape(i * (+durationNum / 10), true) + escape(durationUnit, true) + ";"}"></div>`;
  })}
</div>`;
});
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)();
  });
}
function update(object, path, value) {
  object.update((o) => {
    set(o, path, value);
    return o;
  });
}
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}
function isNullish(value) {
  return value === void 0 || value === null;
}
function isEmpty(object) {
  return isNullish(object) || Object.keys(object).length <= 0;
}
function getValues(object) {
  let results = [];
  for (const [, value] of Object.entries(object)) {
    const values = typeof value === "object" ? getValues(value) : [value];
    results = [...results, ...values];
  }
  return results;
}
function getErrorsFromSchema(initialValues, schema, errors = {}) {
  for (const key in schema) {
    switch (true) {
      case (schema[key].type === "object" && !isEmpty(schema[key].fields)): {
        errors[key] = getErrorsFromSchema(
          initialValues[key],
          schema[key].fields,
          { ...errors[key] }
        );
        break;
      }
      case schema[key].type === "array": {
        const values = initialValues && initialValues[key] ? initialValues[key] : [];
        errors[key] = values.map((value) => {
          const innerError = getErrorsFromSchema(
            value,
            schema[key].innerType.fields,
            { ...errors[key] }
          );
          return Object.keys(innerError).length > 0 ? innerError : "";
        });
        break;
      }
      default: {
        errors[key] = "";
      }
    }
  }
  return errors;
}
const deepEqual = dequal;
function assignDeep(object, value) {
  if (Array.isArray(object)) {
    return object.map((o) => assignDeep(o, value));
  }
  const copy = {};
  for (const key in object) {
    copy[key] = typeof object[key] === "object" && !isNullish(object[key]) ? assignDeep(object[key], value) : value;
  }
  return copy;
}
function set(object, path, value) {
  if (new Object(object) !== object)
    return object;
  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }
  const result = path.slice(0, -1).reduce(
    (accumulator, key, index) => new Object(accumulator[key]) === accumulator[key] ? accumulator[key] : accumulator[key] = Math.trunc(Math.abs(path[index + 1])) === +path[index + 1] ? [] : {},
    object
  );
  result[path[path.length - 1]] = value;
  return object;
}
const util = {
  assignDeep,
  cloneDeep,
  deepEqual,
  getErrorsFromSchema,
  getValues,
  isEmpty,
  isNullish,
  set,
  subscribeOnce,
  update
};
const NO_ERROR = "";
const IS_TOUCHED = true;
function isCheckbox(element) {
  return element.getAttribute && element.getAttribute("type") === "checkbox";
}
function isFileInput(element) {
  return element.getAttribute && element.getAttribute("type") === "file";
}
function resolveValue(element) {
  if (isFileInput(element)) {
    return element.files;
  } else if (isCheckbox(element)) {
    return element.checked;
  } else {
    return element.value;
  }
}
const createForm = (config) => {
  let initialValues = config.initialValues || {};
  const validationSchema = config.validationSchema;
  const validateFunction = config.validate;
  const onSubmit = config.onSubmit;
  const getInitial = {
    values: () => util.cloneDeep(initialValues),
    errors: () => validationSchema ? util.getErrorsFromSchema(initialValues, validationSchema.fields) : util.assignDeep(initialValues, NO_ERROR),
    touched: () => util.assignDeep(initialValues, !IS_TOUCHED)
  };
  const form = writable(getInitial.values());
  const errors = writable(getInitial.errors());
  const touched = writable(getInitial.touched());
  const isSubmitting = writable(false);
  const isValidating = writable(false);
  const isValid = derived(errors, ($errors) => {
    const noErrors = util.getValues($errors).every((field) => field === NO_ERROR);
    return noErrors;
  });
  const modified = derived(form, ($form) => {
    const object = util.assignDeep($form, false);
    for (let key in $form) {
      object[key] = !util.deepEqual($form[key], initialValues[key]);
    }
    return object;
  });
  const isModified = derived(modified, ($modified) => {
    return util.getValues($modified).includes(true);
  });
  function validateField(field) {
    return util.subscribeOnce(form).then((values) => validateFieldValue(field, values[field]));
  }
  function validateFieldValue(field, value) {
    updateTouched(field, true);
    if (validationSchema) {
      isValidating.set(true);
      return validationSchema.validateAt(field, get_store_value(form)).then(() => util.update(errors, field, "")).catch((error) => util.update(errors, field, error.message)).finally(() => {
        isValidating.set(false);
      });
    }
    if (validateFunction) {
      isValidating.set(true);
      return Promise.resolve().then(() => validateFunction({ [field]: value })).then(
        (errs) => util.update(errors, field, !util.isNullish(errs) ? errs[field] : "")
      ).finally(() => {
        isValidating.set(false);
      });
    }
    return Promise.resolve();
  }
  function updateValidateField(field, value) {
    updateField(field, value);
    return validateFieldValue(field, value);
  }
  function handleChange(event) {
    const element = event.target;
    const field = element.name || element.id;
    const value = resolveValue(element);
    return updateValidateField(field, value);
  }
  function handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    isSubmitting.set(true);
    return util.subscribeOnce(form).then((values) => {
      if (typeof validateFunction === "function") {
        isValidating.set(true);
        return Promise.resolve().then(() => validateFunction(values)).then((error) => {
          if (util.isNullish(error) || util.getValues(error).length === 0) {
            return clearErrorsAndSubmit(values);
          } else {
            errors.set(error);
            isSubmitting.set(false);
          }
        }).finally(() => isValidating.set(false));
      }
      if (validationSchema) {
        isValidating.set(true);
        return validationSchema.validate(values, { abortEarly: false }).then(() => clearErrorsAndSubmit(values)).catch((yupErrors) => {
          if (yupErrors && yupErrors.inner) {
            const updatedErrors = getInitial.errors();
            yupErrors.inner.map(
              (error) => util.set(updatedErrors, error.path, error.message)
            );
            errors.set(updatedErrors);
          }
          isSubmitting.set(false);
        }).finally(() => isValidating.set(false));
      }
      return clearErrorsAndSubmit(values);
    });
  }
  function handleReset() {
    form.set(getInitial.values());
    errors.set(getInitial.errors());
    touched.set(getInitial.touched());
  }
  function clearErrorsAndSubmit(values) {
    return Promise.resolve().then(() => errors.set(getInitial.errors())).then(() => onSubmit(values, form, errors)).finally(() => isSubmitting.set(false));
  }
  function updateField(field, value) {
    util.update(form, field, value);
  }
  function updateTouched(field, value) {
    util.update(touched, field, value);
  }
  function updateInitialValues(newValues) {
    initialValues = newValues;
    handleReset();
  }
  return {
    form,
    errors,
    touched,
    modified,
    isValid,
    isSubmitting,
    isValidating,
    isModified,
    handleChange,
    handleSubmit,
    handleReset,
    updateField,
    updateValidateField,
    updateTouched,
    validateField,
    updateInitialValues,
    state: derived(
      [
        form,
        errors,
        touched,
        modified,
        isValid,
        isValidating,
        isSubmitting,
        isModified
      ],
      ([
        $form,
        $errors,
        $touched,
        $modified,
        $isValid,
        $isValidating,
        $isSubmitting,
        $isModified
      ]) => ({
        form: $form,
        errors: $errors,
        touched: $touched,
        modified: $modified,
        isValid: $isValid,
        isSubmitting: $isSubmitting,
        isValidating: $isValidating,
        isModified: $isModified
      })
    )
  };
};
const saveLeadCRM = async (dataForm) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataForm)
    };
    const response = await fetch("/api/crm", requestOptions);
    if (response.ok) {
      const crmResponse = await response.json();
      return {
        status: 200,
        body: crmResponse
      };
    } else {
      throw Error(`Connection failure to the /api/crm endpoint.`);
    }
  } catch (err) {
    console.log("Error (saveLeadCRM): " + err.message);
  }
};
const trackLead = async (dataForm) => {
  const leadEventID = v4();
  fbq && fbq(
    "track",
    "Lead",
    {
      content_name: PRODUCT_NAME,
      content_category: PRODUCT_CATEGORY
    },
    { eventID: leadEventID }
  );
  try {
    let payload = dataForm;
    payload.leadEventID = leadEventID;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    const response = await fetch("/api/lead", requestOptions);
    if (!response.ok) {
      throw Error(JSON.stringify(response));
    } else {
      const responseBody = await response.json();
      return responseBody;
    }
  } catch (err) {
    console.log("Error (trackLead): " + err.message);
  }
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $isSubmitting, $$unsubscribe_isSubmitting;
  const { form, errors, handleChange, handleSubmit, isSubmitting } = createForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      acceptTerms: false
    },
    validationSchema: yup.object().shape({
      firstname: yup.string().required("First name required"),
      lastname: yup.string().required("Last name required."),
      email: yup.string().email("Invalid email").required("Email required"),
      phone: yup.string().min(10, "Phone number must contain at least 10 digits").matches(/^\d+$/, "Invalid phone number").required("Phone number required"),
      acceptTerms: yup.bool().oneOf([true], "Consent to privacy policy and terms required")
    }),
    onSubmit: async (values) => {
      const crmResponse = await saveLeadCRM(values);
      if (crmResponse.status === 200) {
        await trackLead(values);
        return goto("/registration-completed");
      } else {
        alert("The operation could not be completed. Please check the data entered and try again.");
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_isSubmitting = subscribe(isSubmitting, (value) => $isSubmitting = value);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_isSubmitting();
  return `<form class="w-full" novalidate="novalidate"><div class="flex flex-col gap-2"><div class="relative"><input id="firstname" placeholder="First name" name="firstname" type="text" required class="${"peer " + escape("placeholder-gray-400", true) + " focus:bg-white focus:border focus:ring-1 focus:border-black focus:ring-black " + escape($errors.firstname && "border ring-1 border-red-500 ring-red-500", true)}"${add_attribute("value", $form.firstname, 0)}>
			<label for="firstname" class="${"absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all " + escape("hidden", true)}">First name</label>
			${$errors.firstname ? `<small class="block text-red-500">*${escape($errors.firstname)}</small>` : ``}</div>
		<div class="relative"><input id="lastname" placeholder="Last name" name="lastname" type="text" required class="${"peer " + escape("placeholder-gray-400", true) + " focus:bg-white focus:border focus:ring-1 focus:ring-black focus:border-black " + escape($errors.lastname && "border ring-1 border-red-500 ring-red-500", true)}"${add_attribute("value", $form.lastname, 0)}>
			<label for="lastname" class="${"absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all " + escape("hidden", true)}">Last name</label>
			${$errors.lastname ? `<small class="block text-red-500">*${escape($errors.lastname)}</small>` : ``}</div>
		<div class="relative"><input id="email" placeholder="Email" name="email" type="text" required class="${"peer " + escape("placeholder-gray-400", true) + " focus:bg-white focus:border focus:border-black focus:ring-1 focus:ring-black " + escape($errors.email && "border ring-1 border-red-500 ring-red-500", true)}"${add_attribute("value", $form.email, 0)}>
			<label for="email" class="${"absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all " + escape("hidden", true)}">Email</label>
			${$errors.email ? `<small class="block text-red-500">*${escape($errors.email)}</small>` : ``}</div>
		<div class="relative"><input id="phone" placeholder="Phone" name="phone" type="text" required class="${"peer " + escape("placeholder-gray-400", true) + " focus:bg-white focus:border focus:border-black focus:ring-1 focus:ring-black " + escape($errors.phone && "border ring-1 border-red-500 ring-red-500", true)}"${add_attribute("value", $form.phone, 0)}>
			<label for="phone" class="${"absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm transition-all " + escape("hidden", true)}">Phone</label>
			${$errors.phone ? `<small class="block text-red-500">*${escape($errors.phone)}</small>` : ``}</div>
		<div class="flex"><input id="acceptTerms" placeholder="Phone" name="acceptTerms" type="checkbox" required class="${"mt-2 peer " + escape("placeholder-gray-400", true) + " " + escape($errors.acceptTerms && "border ring-1 border-red-500 ring-red-500", true)}"${add_attribute("value", $form.acceptTerms, 0)}>
			<label for="acceptTerms" class="ml-2"><small>I understand and accept the privacy policy and terms.</small></label></div>
		${$errors.acceptTerms ? `<small class="-mt-2 block text-red-500">*${escape($errors.acceptTerms)}</small>` : ``}
		${$isSubmitting ? `<div class="relative"><button type="submit" class="brandButtonOff w-full mt-2 md:mt-5">BOOK NOW</button>
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">${validate_component(SyncLoader, "SyncLoader").$$render(
    $$result,
    {
      size: "50",
      color: "#9bdadd",
      unit: "px",
      duration: "1s",
      class: "spinner-item"
    },
    {},
    {}
  )}</div></div>` : `<button type="submit" class="brandButton w-full mt-2 md:mt-5">BOOK NOW</button>`}</div></form>`;
});
let Check$1 = "<svg viewBox='0 0 14 14' focusable='false' class='w-4 h-4 text-current mr-2' role='presentation'> <g fill='currentColor'><polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' /></g></svg>";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="container mx-auto pb-10"><div class="flex flex-col md:flex-row justify-end items-center md:items-start py-4 sm:py-10"><div class="relative w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:max-w-[46.25rem] md:max-h-[46.25rem]"><div class="absolute top-0 md:right-0 right-1/2 translate-x-1/2 md:translate-x-0">${validate_component(Slideshow, "Slideshow").$$render($$result, {}, {}, {})}</div></div>
		<div class="flex flex-col gap-5 px-12 max-w-lg"><div class="flex flex-col font-extrabold"><p class="mt-5 md:mt-0 text-base text-secondary uppercase tracking-widest">Treatment</p>
				<h1 class="text-gray-900 text-4xl xl:text-4xl">SMILE MAKEOVER</h1></div>
			<div class="flex flex-col gap-2 font-bold text-md"><p class="rounded-[0_6.25rem_6.25rem_0] border-0 bg-gray-900 text-white py-2 px-4 w-fit ">Smile Design
				</p>
				<p class="rounded-[0_6.25rem_6.25rem_0] border-0 bg-gray-900 text-white py-1 px-4 w-fit ">Starting at <span class="text-lg font-extrabold">$33/Mo</span></p>
				<p class="rounded-[0_6.25rem_6.25rem_0] border-0 bg-gray-900 text-white py-2 px-4 w-fit ">Request your FREE APPOINTMENT
				</p></div>
			<ul class="list-none flex flex-col gap-2"><li class="flex"><div class="mt-1"><!-- HTML_TAG_START -->${Check$1}<!-- HTML_TAG_END --></div>
					<p class="text-base">Your smile in <strong>just one week</strong>.</p></li>
				<li class="flex"><div class="mt-1"><!-- HTML_TAG_START -->${Check$1}<!-- HTML_TAG_END --></div>
					<p class="text-base">Design the <strong>shape, size, and color</strong> of your teeth.
					</p></li>
				<li class="flex"><div class="mt-1"><!-- HTML_TAG_START -->${Check$1}<!-- HTML_TAG_END --></div>
					<p class="text-base">Financing available <strong>without interest</strong>.
					</p></li>
				<li class="flex"><div class="mt-1"><!-- HTML_TAG_START -->${Check$1}<!-- HTML_TAG_END --></div>
					<p class="text-base">You can see the final result <strong>before making your decision</strong>.
					</p></li></ul>
			${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div></div></section>`;
});
const Logo1Avif = "/_app/immutable/assets/logo.576254b1.avif 300w";
const Logo1Webp = "/_app/immutable/assets/logo.f2b75570.webp 300w";
const Logo1Png = "/_app/immutable/assets/logo.f5329880.png";
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<button type="button" class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-90 z-10"><button type="button" class="max-w-lg px-4 sm:px-16 py-2 sm:py-10 bg-white rounded-md relative opacity-100"><div class="max-w-xs py-5"><button type="button" aria-label="Close" class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform">×
			</button>
			<header class="flex flex-col items-center pb-4"><div class="text-center w-24"><picture><source${add_attribute("srcset", Logo1Avif, 0)} type="image/avif">
						<source${add_attribute("srcset", Logo1Webp, 0)} type="image/webp">
						<img class="w-24 h-24" loading="lazy" decoding="async"${add_attribute("src", Logo1Png, 0)} alt="Persona con tratamiento"></picture></div>

				<p class="text-secondary text-3xl font-bold w-[clamp(15ch,15ch,15ch)] text-center leading-10">We will get back to you!
				</p></header>
			<div class="px-2">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div></div></button></button>`;
});
const How1Avif = "/_app/immutable/assets/howitworks1.d383b5f7.avif 144w, /_app/immutable/assets/howitworks1.87e2e2b2.avif 288w, /_app/immutable/assets/howitworks1.0fba80d7.avif 432w, /_app/immutable/assets/howitworks1.f800e87c.avif 263w";
const How1Webp = "/_app/immutable/assets/howitworks1.e2d00810.webp 144w, /_app/immutable/assets/howitworks1.b8ad28c7.webp 288w, /_app/immutable/assets/howitworks1.e243242d.webp 432w";
const How1Png = "/_app/immutable/assets/howitworks1.2660d87c.png";
const How2Avif = "/_app/immutable/assets/howitworks2.5dfe3e44.avif 176w, /_app/immutable/assets/howitworks2.d2302086.avif 352w, /_app/immutable/assets/howitworks2.0740567b.avif 528w, /_app/immutable/assets/howitworks2.bb927a4c.avif 1620w";
const How2Webp = "/_app/immutable/assets/howitworks2.201c4d71.webp 176w, /_app/immutable/assets/howitworks2.5b07ac45.webp 352w, /_app/immutable/assets/howitworks2.e1ac5905.webp 528w";
const How2Png = "/_app/immutable/assets/howitworks2.bd134f52.png";
const How3Avif = "/_app/immutable/assets/howitworks3.f2780058.avif 144w, /_app/immutable/assets/howitworks3.2b9f28a9.avif 288w, /_app/immutable/assets/howitworks3.35226dc5.avif 432w, /_app/immutable/assets/howitworks3.5b883919.avif 343w";
const How3Webp = "/_app/immutable/assets/howitworks3.c791311e.webp 144w, /_app/immutable/assets/howitworks3.864cbabd.webp 288w, /_app/immutable/assets/howitworks3.483cd569.webp 432w";
const How3Png = "/_app/immutable/assets/howitworks3.0c795b1b.png";
const HowItWorks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOverlayOpen, $$unsubscribe_isOverlayOpen;
  $$unsubscribe_isOverlayOpen = subscribe(isOverlayOpen, (value) => $isOverlayOpen = value);
  $$unsubscribe_isOverlayOpen();
  return `<section class="brandGradient bg-[rgb(249,249,249)]"><div class="container mx-auto py-20 space-y-12"><div class="text-center space-y-2 max-w-2xl mx-auto"><p class="text-base font-bold">TREATMENT TIMELINE</p>
			<h2 class="text-3xl font-extrabold w-[clamp(15ch,15ch,15ch)] mx-auto md:w-auto">YOUR TREATMENT IN 1 WEEK
			</h2></div>
		<div class="flex flex-col space-y-10 max-w-2xl mx-auto items-center md:items-stretch"><div class="flex flex-col-reverse md:flex-row justify-around ml-8 md:ml-0"><div class="mt-8 md:mt-0 min-w-[16rem]"><picture><source${add_attribute("srcset", How1Avif, 0)} type="image/avif">
						<source${add_attribute("srcset", How1Webp, 0)} type="image/webp">
						<img loading="lazy" decoding="async"${add_attribute("src", How1Png, 0)} alt="Step 1" class="object-cover w-36 ml-8 mr-auto md:ml-0 md:relative md:top-6"></picture></div>
				<div class="flex flex-col self-end min-w-[16rem]"><p class="relative left-5 md:left-0 text-3xl font-bold before:content-['1'] before:block before:absolute before:w-12 before:h-12 before:-left-16 before:text-white before:text-center before:bg-primary before:rounded-full before:pt-2 before:text-3xl before:z-10 md:after:block md:after:absolute md:after:top-8 md:after:-left-10 md:after:border-[1px] md:after:border-primary md:after:h-56 md:after:border-opacity-60 max-w-[15rem] ">VIRTUAL CONSULTATION
					</p>
					<ul class="list-disc whitespace-nowrap"><li class="ml-6">Consultation with a doctor</li>
						<li class="ml-6">Take photos</li>
						<li class="ml-6">Explore financing options</li>
						<li class="ml-6">Book surgery date</li></ul></div></div>
			<div class="flex flex-col-reverse md:flex-row-reverse justify-around ml-8 md:ml-0"><div class="mt-8 md:mt-0 min-w-[16rem]"><picture><source${add_attribute("srcset", How2Avif, 0)} type="image/avif">
						<source${add_attribute("srcset", How2Webp, 0)} type="image/webp">
						<img loading="lazy" decoding="async"${add_attribute("src", How2Png, 0)} alt="Step 2" class="object-cover w-44 ml-6 mr-auto"></picture></div>
				<div class="flex flex-col self-end min-w-[16rem]"><p class="relative left-4 md:left-0 text-3xl font-bold before:content-['2'] before:block before:absolute before:w-12 before:h-12 before:right-[15.5rem] md:before:-right-20 before:text-white before:text-center before:bg-primary before:rounded-full before:pt-2 before:text-3xl before:z-10 md:after:block md:after:absolute md:after:top-8 md:after:-right-[3.6rem] md:after:border-[1px] md:after:border-primary md:after:h-48 md:after:border-opacity-60 max-w-[15rem] ">VENEERS CONSULTATION
					</p>
					<ul class="list-disc whitespace-nowrap"><li class="ml-6 ">In-depth examination</li>
						<li class="ml-6 ">X-rays</li>
						<li class="ml-6 ">Digital Images</li>
						<li class="ml-6 ">Temporary Veneers</li></ul></div></div>
			<div class="flex flex-col-reverse md:flex-row justify-around ml-8 md:ml-0"><div class="mt-8 md:mt-0 min-w-[16rem]"><picture><source${add_attribute("srcset", How3Avif, 0)} type="image/avif">
						<source${add_attribute("srcset", How3Webp, 0)} type="image/webp">
						<img loading="lazy" decoding="async"${add_attribute("src", How3Png, 0)} alt="Step 3" class="object-cover w-36 mr-auto ml-14 md:mx-auto"></picture></div>
				<div class="flex flex-col self-end min-w-[16rem]"><p class="relative w-full mx-auto pr-8 sm:pr-0 pl-10 md:pl-10 text-3xl font-bold before:content-['3'] before:block before:absolute before:w-12 before:h-12 before:-left-[1.5rem] md:before:-left-[1.8rem] before:text-white before:text-center before:bg-primary before:rounded-full before:pt-2 before:text-3xl before:z-10 max-w-[18rem]">SMILE MAKEOVER DAY
					</p>
					<ul class="list-disc whitespace-nowrap"><li class="ml-6 sm:ml-10 md:ml-20">You’ll have a custom-fit <br> smile with permanent veneers!
						</li></ul></div></div></div>
		<div class="flex justify-center"><button class="brandButton">BOOK NOW</button></div></div></section>
${$isOverlayOpen ? `${validate_component(Overlay, "Overlay").$$render($$result, {}, {}, {})}` : ``}`;
});
let Check = "<svg viewBox='0 0 14 14' focusable='false' class='w-4 h-4 text-current mr-2' role='presentation'> <g fill='currentColor'><polygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039' /></g></svg>";
const Benefits = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOverlayOpen, $$unsubscribe_isOverlayOpen;
  $$unsubscribe_isOverlayOpen = subscribe(isOverlayOpen, (value) => $isOverlayOpen = value);
  $$unsubscribe_isOverlayOpen();
  return `<section class="px-5"><div class="py-20 space-y-8 md:space-y-12"><div class="text-center space-y-2 max-w-2xl mx-auto"><p class="text-base font-bold text-secondary">PERFECT SMILE</p>
			<h2 class="text-4xl font-extrabold mx-auto md:w-auto">SMILE DESIGN</h2>
			<div><p class="max-w-sm md:max-w-4xl mx-auto mt-6">Smile design is an artistic approach to creating beautiful smiles. It involves one or more
					cosmetic dental treatments that correct worn down, misaligned, or gap teeth, restoring
					your oral health and creating a more attractive smile.
				</p></div></div>
		<div class="md:grid md:grid-cols-2 md:gap-12 space-y-8 md:space-y-0 max-w-sm md:max-w-xl lg:md:max-w-2xl mx-auto"><div><div class="md:ml-0"><div class="mt-1 inline-block"><!-- HTML_TAG_START -->${Check}<!-- HTML_TAG_END --></div>
					<h3 class="mb-2 text-xl font-bold inline-block">Refresh your smile</h3>
					<p class="text-gray-500 text-sm">Recover the appearance of your smile from the effects of wear and aging on your teeth.
					</p></div></div>
			<div><div class="md:ml-0"><div class="mt-1 inline-block"><!-- HTML_TAG_START -->${Check}<!-- HTML_TAG_END --></div>
					<h3 class="mb-2 text-xl font-bold inline-block">Natural-looking</h3>
					<p class="text-gray-500 text-sm">It fits perfectly with the teeth, adapted smoothly to the gums and are virtually
						indistinguishable from a natural tooth.
					</p></div></div>
			<div><div class="md:ml-0"><div class="mt-1 inline-block"><!-- HTML_TAG_START -->${Check}<!-- HTML_TAG_END --></div>
					<h3 class="mb-2 text-xl font-bold inline-block">Cosmetic details</h3>
					<p class="text-gray-500 text-sm">Since they are attached to the front surfaces of the teeth, small problems that would
						normally require orthodontics can go unnoticed.
					</p></div></div>
			<div><div class="md:ml-0"><div class="mt-1 inline-block"><!-- HTML_TAG_START -->${Check}<!-- HTML_TAG_END --></div>
					<h3 class="mb-2 text-xl font-bold inline-block">Damaged tooth enamel</h3>
					<p class="text-gray-500 text-sm">According to the American Academy of Cosmetic Dentistry, veneers are an excellent
						treatment for teeth with abraded or eroded enamel, while also being pleasing to the eye.
					</p></div></div></div>
		<div class="flex justify-center"><button class="brandButton">BOOK NOW</button></div></div></section>
${$isOverlayOpen ? `${validate_component(Overlay, "Overlay").$$render($$result, {}, {}, {})}` : ``}`;
});
const Testimonials1Fallback = "/_app/immutable/assets/testimonials1.6645b993.jpg 328w";
const Testimonials1Webp = "/_app/immutable/assets/testimonials1.5b68485f.webp 328w";
const Testimonials1Avif = "/_app/immutable/assets/testimonials1.a3a06e6b.avif 328w";
const Testimonials2Fallback = "/_app/immutable/assets/testimonials2.071bfd2a.jpg 328w";
const Testimonials2Webp = "/_app/immutable/assets/testimonials2.33d0833b.webp 328w";
const Testimonials2Avif = "/_app/immutable/assets/testimonials2.e7d5da31.avif 328w";
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-white text-primary"><div class="container mx-auto py-20 space-y-8 border-y-2 border-primary"><div class="text-center space-y-2"><h2 class="text-4xl leading-10 font-extrabold md:w-[20ch] xl:w-auto mx-auto uppercase">Let Your Smile Speak for You
			</h2>
			<p class="font-bold text-secondary text-xl leading-8 uppercase">Our patients love us</p></div>
		<div class="flex flex-col md:flex-row items-center justify-center md:items-end"><div class="z-10 max-w-[80%]"><picture><source${add_attribute("srcset", Testimonials1Avif, 0)} type="image/avif">
					<source${add_attribute("srcset", Testimonials1Webp, 0)} type="image/webp">
					<img loading="lazy" decoding="async"${add_attribute("src", Testimonials1Fallback, 0)} alt="Testimonial" class="w-[328px] aspect-square"></picture></div>
			<div class="brandGradientVariant -mt-12 md:mt-0 ml-0 md:-ml-36 max-h-64 max-w-md w-5/6 md:max-w-xl md:mb-[3.75rem] text-primary rounded-[2.5rem] px-6 md:pl-44 pt-12 pb-8"><h2 class="font-extrabold leading-5 text-base">Kely</h2>
				<p class="text-lg italic font-light text-justify md:text-start">&quot;I feel like a completely different person now! My confidence has skyrocketed and I can’t
					stop laughing. It’s so great.&quot;
				</p></div></div>
		<div class="flex flex-col md:flex-row-reverse items-center justify-center md:items-end"><div class="z-10 max-w-[80%]"><picture><source${add_attribute("srcset", Testimonials2Avif, 0)} type="image/avif">
					<source${add_attribute("srcset", Testimonials2Webp, 0)} type="image/webp">
					<img loading="lazy" decoding="async"${add_attribute("src", Testimonials2Fallback, 0)} alt="Testimonial" class="w-[328px] aspect-square"></picture></div>
			<div class="brandGradientVariant -mt-12 md:mt-0 mr-0 md:-mr-36 max-h-64 max-w-md w-5/6 md:max-w-xl md:mb-[3.75rem] text-primary rounded-[2.5rem] px-6 md:pr-44 md:pl-10 pt-12 pb-8"><h2 class="font-extrabold leading-5 text-base">Robert</h2>
				<p class="text-lg italic font-light text-justify md:text-start">&quot;This transformation has been life-changing! I’m so much happier and my confidence is
					through the roof.&quot;
				</p></div></div></div></section>`;
});
const Pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOverlayOpen, $$unsubscribe_isOverlayOpen;
  $$unsubscribe_isOverlayOpen = subscribe(isOverlayOpen, (value) => $isOverlayOpen = value);
  $$unsubscribe_isOverlayOpen();
  return `<div class="bg-white text-primary"><div class="container mx-auto py-20 space-y-10"><div class="text-center space-y-0 md:space-y-4"><p class="text-lg text-secondary font-bold md:leading-6 uppercase">cosmetic dentistry</p>
			<h2 class="text-4xl font-extrabold md:leading-10 mx-auto sm:w-[70%] px-4 md:w-[80%] uppercase">Choose the plan that suits you best
			</h2></div>
		<div class="flex flex-col lg:flex-row w-80 mx-auto space-y-10 lg:space-y-0 space-x-0 lg:space-x-10 justify-center items-center"><div class="brandGradientVariant min-w-[18rem] px-12 py-8 text-center space-y-8"><div class="flex flex-col items-center space-y-4"><p class="font-extrabold text-base">6 Veneers</p>
					<h2 class="text-5xl font-extrabold">$33</h2>
					<p class="text-base text-textAccent">36 months</p>
					<p class="px-12 py-1.5 font-extrabold text-3xl text-white rounded-[6.25rem_6.25rem_6.25rem_6.25rem] bg-gray-900">990€
					</p></div>
				<div class="flex flex-col items-center space-y-2"><p class="font-extrabold text-base ">Free First Appointment</p>
					<ul><li class="text-base font-normal">Consultation</li>
						<li class="">Intraoral Scanner</li></ul></div>
				<div class="space-y-4"><p class="font-extrabold text-base uppercase">-15% students</p>
					<button class="brandButton px-12 whitespace-nowrap">BOOK NOW</button></div></div>
			<div class="brandGradientVariant min-w-[18rem] px-12 py-8 text-center space-y-8"><div class="flex flex-col items-center space-y-4"><p class="font-extrabold text-base">8 Veneers</p>
					<h2 class="text-5xl font-extrabold">35€</h2>
					<p class="text-base text-textAccent">36 months</p>
					<p class="px-12 py-1.5 font-extrabold text-3xl text-white rounded-[6.25rem_6.25rem_6.25rem_6.25rem] bg-gray-900">1.249€
					</p></div>
				<div class="flex flex-col items-center space-y-2"><p class="font-extrabold text-base ">Free First Appointment</p>
					<ul><li class="text-base font-normal">Consultation</li>
						<li class="">Intraoral Scanner</li></ul></div>
				<div class="space-y-4"><p class="font-extrabold text-base uppercase">-15% students</p>
					<button class="brandButton px-12 whitespace-nowrap">BOOK NOW</button></div></div>
			<div class="brandGradientVariant min-w-[18rem] px-12 py-8 text-center space-y-8"><div class="flex flex-col items-center space-y-4"><p class="font-extrabold text-base">10 Veneers</p>
					<h2 class="text-5xl font-extrabold">31€</h2>
					<p class="text-base text-textAccent">48 months</p>
					<p class="px-12 py-1.5 font-extrabold text-3xl text-white rounded-[6.25rem_6.25rem_6.25rem_6.25rem] bg-gray-900">1.495€
					</p></div>
				<div class="flex flex-col items-center space-y-2"><p class="font-extrabold text-base ">Free First Appointment</p>
					<ul><li class="text-base font-normal">Consultation</li>
						<li class="">Intraoral Scanner</li></ul></div>
				<div class="space-y-4"><p class="font-extrabold text-base uppercase">-15% students</p>
					<button class="brandButton px-12 whitespace-nowrap">BOOK NOW</button></div></div></div>
		<div class="text-center"><p class="font-extrabold text-2xl">SMILING IS COOL. 😉</p></div></div></div>
${$isOverlayOpen ? `${validate_component(Overlay, "Overlay").$$render($$result, {}, {}, {})}` : ``}`;
});
const DoctorFallback = "/_app/immutable/assets/dr-john-doe.64ff38e4.jpg 375w";
const DoctorWebp = "/_app/immutable/assets/dr-john-doe.e67f863e.webp 375w";
const DoctorAvif = "/_app/immutable/assets/dr-john-doe.236f5164.avif 375w";
const Facility1Fallback = "/_app/immutable/assets/facilities1.1f9935eb.jpg 1024w, /_app/immutable/assets/facilities1.846e8747.jpg 768w, /_app/immutable/assets/facilities1.9421ca28.jpg 640w";
const Facility1Webp = "/_app/immutable/assets/facilities1.0662c856.webp 1024w, /_app/immutable/assets/facilities1.2eefda1c.webp 768w, /_app/immutable/assets/facilities1.79f544b8.webp 640w";
const Facility1Avif = "/_app/immutable/assets/facilities1.b0047353.avif 1024w, /_app/immutable/assets/facilities1.695c5976.avif 768w, /_app/immutable/assets/facilities1.b2edd3d2.avif 640w";
const Facility2Fallback = "/_app/immutable/assets/facilities2.cd7c15c4.jpg 1024w, /_app/immutable/assets/facilities2.cebf43a7.jpg 768w, /_app/immutable/assets/facilities2.7bca24ce.jpg 640w";
const Facility2Webp = "/_app/immutable/assets/facilities2.2902c827.webp 1024w, /_app/immutable/assets/facilities2.c0525e62.webp 768w, /_app/immutable/assets/facilities2.fa1ea837.webp 640w";
const Facility2Avif = "/_app/immutable/assets/facilities2.e62b2d72.avif 1024w, /_app/immutable/assets/facilities2.746e4e41.avif 768w, /_app/immutable/assets/facilities2.0c34bf9e.avif 640w";
const Facility3Fallback = "/_app/immutable/assets/facilities3.1f736587.jpg 1024w, /_app/immutable/assets/facilities3.af62a6ef.jpg 768w, /_app/immutable/assets/facilities3.1eda59a3.jpg 640w";
const Facility3Webp = "/_app/immutable/assets/facilities3.b20ec141.webp 1024w, /_app/immutable/assets/facilities3.457b15ff.webp 768w, /_app/immutable/assets/facilities3.ed15d98a.webp 640w";
const Facility3Avif = "/_app/immutable/assets/facilities3.5b8df814.avif 1024w, /_app/immutable/assets/facilities3.0e6454f8.avif 768w, /_app/immutable/assets/facilities3.f52ae3b2.avif 640w";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isOverlayOpen, $$unsubscribe_isOverlayOpen;
  $$unsubscribe_isOverlayOpen = subscribe(isOverlayOpen, (value) => $isOverlayOpen = value);
  $$unsubscribe_isOverlayOpen();
  return `<section class="bg-gray-100"><div class="px-5 flex flex-col py-20 space-y-8 md:space-y-12"><div class="flex flex-col md:flex-row space-y-8 md:space-y-0 max-w-sm md:max-w-2xl lg:md:max-w-5xl mx-auto space-x-0 md:space-x-8"><div class=""><picture><source${add_attribute("srcset", DoctorAvif, 0)} type="image/avif">
					<source${add_attribute("srcset", DoctorWebp, 0)} type="image/webp">
					<img loading="lazy" decoding="async"${add_attribute("src", DoctorFallback, 0)} alt="Dr. John Doe" class="w-96 aspect-square"></picture></div>
			<div class="text-center space-y-2 flex flex-col justify-evenly"><div class=""><p class="text-base font-bold text-secondary uppercase">Cosmetic Dentist</p>
					<h2 class="text-4xl font-extrabold mx-auto md:w-auto">Dr. John Doe</h2>
					<p class="max-w-sm md:max-w-4xl mx-auto mt-6 text-justify ">Dr. John Doe passion for creating natural-looking smiles motivated him to complete
						advanced training in dental aesthetics at Seattle Institute for Advanced Dental
						Education. Additionally, he has received advanced training in occlusion to ensure you
						have a perfect smile and a perfect bite.
					</p></div>
				<div class="flex justify-center"><button class="brandButton mt-5 md:mt-0">BOOK NOW</button></div></div></div>
		<div class="flex flex-col space-y-8 md:space-y-12"><h2 class="text-2xl font-extrabold mx-auto md:w-auto text-secondary">DENTAL OFFICE</h2>

			<div class="flex flex-col md:flex-row mx-auto max-w-sm md:max-w-2xl lg:md:max-w-5xl space-y-12 md:space-y-0 space-x-0 md:space-x-12"><picture class="flex-1"><source${add_attribute("srcset", Facility1Avif, 0)} type="image/avif">
					<source${add_attribute("srcset", Facility1Webp, 0)} type="image/webp">
					<img loading="lazy" decoding="async"${add_attribute("src", Facility1Fallback, 0)} alt="Dental Office" class="w-72 aspect-square"></picture>
				<picture class="flex-1"><source${add_attribute("srcset", Facility2Avif, 0)} type="image/avif">
					<source${add_attribute("srcset", Facility2Webp, 0)} type="image/webp">
					<img loading="lazy" decoding="async"${add_attribute("src", Facility2Fallback, 0)} alt="Dental Office" class="w-72 aspect-square"></picture>
				<picture class="flex-1"><source${add_attribute("srcset", Facility3Avif, 0)} type="image/avif">
					<source${add_attribute("srcset", Facility3Webp, 0)} type="image/webp">
					<img loading="lazy" decoding="async"${add_attribute("src", Facility3Fallback, 0)} alt="Dental Office" class="w-72 aspect-square"></picture></div></div>
		<div class="text-center"><h3 class="text-md italic mx-auto md:w-auto text-gray-800">75 North Fictional Street, Roselle, IL 60172.
			</h3></div>
		<div class="h-[400px] w-full md:w-[42rem] lg:w-[64rem] aspect-auto mx-auto"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.71601068694!2d-88.01214949906408!3d41.833392500803214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sve!4v1664207929827!5m2!1sen!2sve" width="100%" height="100%" style="border:0;" title="Dental office location on the map" class="mx-auto" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></section>
${$isOverlayOpen ? `${validate_component(Overlay, "Overlay").$$render($$result, {}, {}, {})}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $event_id, $$unsubscribe_event_id;
  $$unsubscribe_event_id = subscribe(event_id, (value) => $event_id = value);
  let { data } = $$props;
  set_store_value(event_id, $event_id = data.eid, $event_id);
  const seoProps = {
    title: "Smile Design | Dr. John Doe",
    description: "Get Back Your Confidence With Your Best Smile",
    keywords: "smile design, veneers treatment",
    type: "website"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_event_id();
  return `${validate_component(SEO, "SEO").$$render($$result, Object.assign({}, seoProps), {}, {})}
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(HowItWorks, "HowItWorks").$$render($$result, {}, {}, {})}
${validate_component(Benefits, "Benefits").$$render($$result, {}, {}, {})}
${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}
${validate_component(Pricing, "Pricing").$$render($$result, {}, {}, {})}
${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
