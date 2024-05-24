export interface URLIconProps {
  url: string;
}

export const URlIcon = ({ url }: URLIconProps) => (
  <div className="w-[24px] h-[24px]">
    <img
      src={url}
      width="24"
      height="24"
      style={{ filter: 'saturate(0) brightness(0)' }} />
  </div>
);
