'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';

const SafeLink = ({ href, children, className = '', ...rest }) => {
  const locale = useLocale();

  let isValid = false;
  let localizedHref = href;

  if (typeof href === 'string' && href.trim() !== '') {
    isValid = true;
    localizedHref = `/${locale}${href.startsWith('/') ? href : `/${href}`}`;
  }

  else if (
    href &&
    typeof href === 'object' &&
    typeof href.pathname === 'string' &&
    href.pathname.trim() !== ''
  ) {
    isValid = true;
    localizedHref = {
      ...href,
      pathname: `/${locale}${href.pathname.startsWith('/') ? href.pathname : `/${href.pathname}`}`,
    };
  }

  if (!isValid) {
    return <span className={className}>{children}</span>;
  }

  return (
    <Link href={localizedHref} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default SafeLink;