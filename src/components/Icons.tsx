type IconsProps = {
	icons: string[];
	iconClassName: string;
	className?: string;
};

export default function Icons({ icons, iconClassName, className }: IconsProps) {
	return (
		<div className={className}>
			{icons.map((iconName) => (
				<img
					key={iconName}
					src={`/${iconName}.svg`}
					alt={`${iconName} icon`}
					className={iconClassName}
				/>
			))}
		</div>
	);
}
