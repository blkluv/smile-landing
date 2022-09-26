<script>
	import { goto } from '$app/navigation';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { saveLeadCRM } from '$lib/utils/saveLeadCRM';
	import { trackLead } from '$lib/utils/trackLead';

	const { form, errors, handleChange, handleSubmit, isSubmitting } = createForm({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			phone: '',
			acceptTerms: false
		},
		validationSchema: yup.object().shape({
			firstname: yup.string().required('First name required'),
			lastname: yup.string().required('Last name required.'),
			email: yup.string().email('Invalid email').required('Email required'),
			phone: yup
				.string()
				.min(10, 'Phone number must contain at least 10 digits')
				.matches(/^\d+$/, 'Invalid phone number')
				.required('Phone number required'),
			acceptTerms: yup.bool().oneOf([true], 'Consent to privacy policy and terms required')
		}),
		onSubmit: async (values) => {
			const crmResponse = await saveLeadCRM(values);

			if (crmResponse.status === 200) {
				await trackLead(values);
				return goto('/registration-completed');
			} else {
				alert('The operation could not be completed. Please check the data entered and try again.');
			}
		}
	});
</script>

<form on:submit|preventDefault={handleSubmit} class="w-full" novalidate="novalidate">
	<div class="flex flex-col gap-2">
		<div class="relative">
			<input
				id="firstname"
				placeholder="First name"
				name="firstname"
				type="text"
				required
				class="peer {'placeholder-gray-400'} focus:bg-white focus:border focus:ring-1 focus:border-black focus:ring-black
                {$errors.firstname && 'border ring-1 border-red-500 ring-red-500'}"
				bind:value={$form.firstname}
				on:change={handleChange}
			/>
			<label
				for="firstname"
				class="absolute left-3 -top-5 text-gray-600 text-sm
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2
                peer-focus:-top-5
                peer-focus:text-gray-600
                peer-focus:text-sm
                transition-all
                {'hidden'}
                ">First name</label
			>
			{#if $errors.firstname}
				<small class="block text-red-500">&ast;{$errors.firstname}</small>
			{/if}
		</div>
		<div class="relative">
			<input
				id="lastname"
				placeholder="Last name"
				name="lastname"
				type="text"
				required
				class="peer {'placeholder-gray-400'} focus:bg-white focus:border focus:ring-1 focus:ring-black focus:border-black
                {$errors.lastname && 'border ring-1 border-red-500 ring-red-500'}"
				bind:value={$form.lastname}
				on:change={handleChange}
			/>
			<label
				for="lastname"
				class="absolute left-3 -top-5 text-gray-600 text-sm
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2
                peer-focus:-top-5
                peer-focus:text-gray-600
                peer-focus:text-sm
                transition-all
                {'hidden'}
                ">Last name</label
			>
			{#if $errors.lastname}
				<small class="block text-red-500">&ast;{$errors.lastname}</small>
			{/if}
		</div>
		<div class="relative">
			<input
				id="email"
				placeholder="Email"
				name="email"
				type="text"
				required
				class="peer {'placeholder-gray-400'} focus:bg-white focus:border focus:border-black focus:ring-1 focus:ring-black
                {$errors.email && 'border ring-1 border-red-500 ring-red-500'}"
				bind:value={$form.email}
				on:change={handleChange}
			/>
			<label
				for="email"
				class="absolute left-3 -top-5 text-gray-600 text-sm
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2
                peer-focus:-top-5
                peer-focus:text-gray-600
                peer-focus:text-sm
                transition-all
                {'hidden'}
                ">Email</label
			>
			{#if $errors.email}
				<small class="block text-red-500">&ast;{$errors.email}</small>
			{/if}
		</div>
		<div class="relative">
			<input
				id="phone"
				placeholder="Phone"
				name="phone"
				type="text"
				required
				class="peer {'placeholder-gray-400'} focus:bg-white focus:border focus:border-black focus:ring-1 focus:ring-black
                {$errors.phone && 'border ring-1 border-red-500 ring-red-500'}"
				bind:value={$form.phone}
				on:change={handleChange}
			/>
			<label
				for="phone"
				class="absolute left-3 -top-5 text-gray-600 text-sm
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-placeholder-shown:top-2
                peer-focus:-top-5
                peer-focus:text-gray-600
                peer-focus:text-sm
                transition-all
                {'hidden'}
                ">Phone</label
			>
			{#if $errors.phone}
				<small class="block text-red-500">&ast;{$errors.phone}</small>
			{/if}
		</div>
		<div class="flex">
			<input
				id="acceptTerms"
				placeholder="Phone"
				name="acceptTerms"
				type="checkbox"
				required
				class="mt-2 peer {'placeholder-gray-400'}  		
                {$errors.acceptTerms && 'border ring-1 border-red-500 ring-red-500'}"
				bind:value={$form.acceptTerms}
				on:change={handleChange}
			/>
			<label for="acceptTerms" class="ml-2">
				<small>I understand and accept the privacy policy and terms.</small>
			</label>
		</div>
		{#if $errors.acceptTerms}
			<small class="-mt-2 block text-red-500">&ast;{$errors.acceptTerms}</small>
		{/if}
		{#if $isSubmitting}
			<div class="relative">
				<button type="submit" class="brandButtonOff w-full mt-2 md:mt-5">BOOK NOW</button>
				<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<SyncLoader size="50" color="#9bdadd" unit="px" duration="1s" class="spinner-item" />
				</div>
			</div>
		{:else}
			<button type="submit" class="brandButton w-full mt-2 md:mt-5">BOOK NOW</button>
		{/if}
	</div>
</form>
