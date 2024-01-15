import React, { memo, useCallback, useEffect, useState } from "react";
import styles from './InputForm.module.css';

const InputFormImpl = ({
	type,
	inputPlaceholder
}) => {

	return (
		<div>
			<input
				type={type || "text"}
				className={styles['input']}
				// name={valueKey}
				// id={valueKey}
				placeholder={inputPlaceholder}
			// value={value}
			// onChange={(ev) => setValue(ev.target.value)}
			/>
		</div>
	);
};

export const InputForm = memo(InputFormImpl);