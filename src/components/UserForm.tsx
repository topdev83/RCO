import { SimpleForm, TextInput, BooleanInput } from 'react-admin';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
	name: yup.string().required(),
	password: yup.string().max(8).min(4),
	adminRights: yup.boolean(),
});

export default function UserForm() {
	const defaultValues = {
		name: '',
		password: '',
		adminRights: false,
	};
	return (
		<SimpleForm defaultValues={defaultValues} resolver={yupResolver(schema)}>
			<TextInput source="name" variant="outlined" sx={{ width: '100%' }} />
			<TextInput source="password" variant="outlined" sx={{ width: '100%' }} />
			<BooleanInput source="adminRights" />
		</SimpleForm>
	);
}
